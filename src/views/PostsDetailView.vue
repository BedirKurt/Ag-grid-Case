<script setup lang="ts">
import { useRoute } from "vue-router";
import { client } from "../services/index.ts";
import { RequestState } from "azax";
import { watch, onMounted, ref, reactive } from "vue";

interface Data {
  userId: number;
  id: number;
  title: string;
  body: boolean;
}

const route = useRoute();

const postId = route?.params?.id;
const rowData = ref<Data[]>([]);
const rowDataReqState = reactive(new RequestState());

const getData = async () => {
  try {
    const response = await client.getAsync<Data[]>(
      "/posts?id=" + `${postId}`,
      rowDataReqState
    );
    console.log(response);
    if (!response.data) throw new Error("Azax Error !");
    rowData.value = response.data;
  } catch (error) {
    console.log(error);
  }
};

watch(
  () => rowDataReqState,
  () => console.log(rowDataReqState),
  {
    immediate: true,
    deep: true,
  }
);

onMounted(() => {
  getData();
});
</script>

<template>
  <div
    class="w-full max-w-md p-24 container mx-auto flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700 gap-5"
  >
    <h2 class="mb-2 text-lg font-semibold text-orange-500 dark:text-white">
      Post ID : {{ postId }}
    </h2>
    <ul
      class="text-gray-700 list-none list-inside dark:text-gray-400 font-mono flex flex-col gap-10"
      v-for="data in rowData"
    >
      <li><span class="text-orange-500">Tittle : </span> {{ data.title }}</li>
      <li><span class="text-orange-500">User ID : </span>{{ data.userId }}</li>
      <li><span class="text-orange-500">Completed : </span>{{ data.body }}</li>
    </ul>
  </div>
</template>
