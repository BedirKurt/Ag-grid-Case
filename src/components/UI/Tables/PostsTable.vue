<script setup lang="ts">
import BaseTable from "../BaseTable.vue";
import { client } from "../../../services/index.ts";
import type { ColDef } from "ag-grid-enterprise";
import { ref, onMounted, reactive, watch } from "vue";
import ArrowIcon from "../Icons/ArrowIcon.vue";
import { useRouter } from "vue-router";
import { RequestState } from "azax";

interface Data {
  userId: number;
  id: number;
  title: string;
  body: boolean;
}

const router = useRouter();

const rowData = ref<Data[]>([]);
const rowDataReqState = reactive(new RequestState());
const columsDef = ref<ColDef[]>([
  { field: "userId", headerName: "Kullanıcı ID", flex: 2 },
  { field: "id", headerName: "ID", flex: 2 },
  { field: "title", headerName: "Başlık", flex: 2 },
  { field: "body", headerName: "Body", flex: 2 },
  {
    field: "Seç",
    headerName: "Seç",
    cellRenderer: ArrowIcon,
    onCellClicked(event) {
      const postsDetailId = event?.data?.id;

      router.push({
        name: "PostDetail",
        params: { id: postsDetailId },
      });
    },
    sortable: false,
    flex: 2,
  },
]);

const loadData = async () => {
  try {
    const response = await client.getAsync<Data[]>("/posts", rowDataReqState);
    console.log(response);
    if (!response.data) throw new Error("Fetch error");

    rowData.value = response.data;
  } catch (err) {
    console.error(err);
  }
};

watch(
  () => rowDataReqState,
  (newVal) => console.log(newVal),
  {
    immediate: true,
    deep: true,
  }
);

onMounted(async () => {
  loadData();
});
</script>

<template>
  <section class="mx-auto container flex flex-col rounded-2xl shadow-2xl">
    <div>
      <h1 class="text-center mt-10 font-sans font-bold text-xl text-orange-500">
        Posts Table
      </h1>
    </div>
    <br />
    <hr />
    <div class="p-20 rounded-lg">
      <BaseTable
        :column-defs="columsDef"
        :row-data="rowData"
        :loading="rowDataReqState.isPending"
      ></BaseTable>
    </div>
  </section>
</template>

<style></style>
