<script setup lang="ts">
import { watch } from "vue";
import { RouterLink, RouterView, useRoute } from "vue-router";
const route = useRoute();

watch(route, () => console.log("route", route));
</script>
<template>
  <header
    class="flex flex-col justify-center items-center bg-orange-600 shadow-sm p-5"
  >
    <h1 class="font-mono text-2xl text-center font-bold text-white">
      AG Grid Case
    </h1>
    <div class="flex gap-10 mt-10">
      <RouterLink
        class="flex items-center rounded-md border bg-slate-100 border-slate-300 py-1 px-6 text-center transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        to="/todostable"
        >Todo Table</RouterLink
      >
      <RouterLink
        class="flex items-center rounded-md border bg-slate-100 border-slate-300 py-1 px-6 text-center transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        to="/poststable"
        >Post Table</RouterLink
      >
    </div>
  </header>

  <main class="p-20">
    <RouterView />
  </main>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
