<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="flex justify-center items-center bg-slate-300 shadow-sm p-10">
    <header>
      <h1 class="font-mono text-2xl text-center font-bold text-red-500">
        AG Grid Case
      </h1>
      <div class="flex gap-4">
        <button
          class="rounded-lg bg-gray-600 text-center text-stone-300 hover:text-slate-50 font-mono text-xl px-10"
        >
          <RouterLink to="/basepoststable">Base Post Table</RouterLink>
        </button>
        <button
          class="rounded-lg bg-gray-600 text-center text-stone-300 hover:text-slate-50 font-mono text-xl px-5"
        >
          <RouterLink to="/basetodotable">Base Todo Table</RouterLink>
        </button>
      </div>
    </header>
  </div>
  <main></main>
  <RouterView />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
