<script setup lang="ts">
import type { ColDef } from "ag-grid-enterprise";
import { client } from "../../../services/index.ts";
import { ref, onMounted, reactive, watch } from "vue";
import BaseTable from "../BaseTable.vue";
import { RequestState } from "azax";
import { useRouter } from "vue-router";
import ArrowIcon from "../Icons/ArrowIcon.vue";

interface Data {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const router = useRouter();

const rowData = ref<Data[]>([]);
const rowDataReqState = reactive(new RequestState());
const columsDef = ref<ColDef[]>([
  { field: "userId", headerName: "Kullanıcı ID", flex: 2 },
  { field: "id", headerName: "ID", flex: 2 },
  { field: "title", headerName: "Başlık", flex: 2 },
  { field: "completed", headerName: "Tamamlanmış", flex: 2 },
  {
    field: "Seç",
    headerName: "Seç",
    cellRenderer: ArrowIcon,
    onCellClicked(event) {
      const todoDetailId = event?.data?.id;

      router.push({
        name: "TodoDetail",
        params: { id: todoDetailId },
      });
    },
    sortable: false,
    flex: 2,
  },
]);

const getData = async () => {
  try {
    const response = await client.getAsync<Data[]>("/todos", rowDataReqState);
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
  <section class="mx-auto container flex flex-col rounded-2xl shadow-2xl">
    <div>
      <h1 class="text-center mt-10 font-sans font-bold text-xl text-orange-500">
        Todos Table
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
