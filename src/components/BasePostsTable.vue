<script setup lang="ts">
import { AgGridVue } from "ag-grid-vue3";
import { ref, reactive } from "vue";
import { HttpService, RequestState } from "azax";

import type { ColDef } from "ag-grid-community";

const columsDef = ref<ColDef[]>([
  { field: "userId", headerName: "Kullanıcı ID", flex: 2 },
  { field: "id", headerName: "ID", flex: 2 },
  { field: "title", headerName: "Başlık", flex: 2 },
  { field: "body", headerName: "Body", flex: 2 },
]);

const rowData = ref<any[]>([]);

function onRowData() {
  client.get(
    "/posts",
    (res) => updateData(res.data), // Success callback
    (err) => console.error("Error:", err), // Error callback
    state
  );
}

const updateData = (data: any) => {
  rowData.value = data;
};

const client = new HttpService({
  baseUrl: "jsonplaceholder.typicode.com/",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
  config: {
    rateLimit: 5,
    cooldown: 3,
    retries: 3,
    delay: 5000,
  },
});
const state = reactive(new RequestState());
</script>

<template>
  <section class="mx-auto container flex flex-col mt-10 rounded-2xl shadow-2xl">
    <div>
      <h1 class="text-center mt-10 font-sans font-bold text-xl text-gray-500">
        AG Grid
      </h1>
    </div>
    <br />
    <hr />
    <div class="p-20 rounded-lg">
      <AgGridVue
        :column-defs="columsDef"
        :row-data="rowData"
        style="width: 100%; height: 400px"
      />
    </div>
    <div class="flex justify-center gap-20 mb-5">
      <button
        @click="onRowData()"
        class="rounded-lg bg-orange-600 px-3 p-1 text-sm text-white font-mono font-bold shadow-xl"
      >
        Get Data
      </button>
    </div>
  </section>
</template>

<style scoped></style>
