<template>
    <input
      v-model="model"
      ref="input"
      class="bg-gray-50 border-1 border-gray-300 text-gray-900 text-sm rounded-[3px] focus:ring-sky-500 focus:border-sky-500 block w-full py-2.5 px-2 disabled:bg-gray-200 disabled:cursor-not-allowed"
    />
  </template>
  
  <script setup>
  import { ref } from 'vue';
  const model = defineModel();
  const input = ref(null);
  defineExpose({ input });
  </script>
  
  <style scoped></style>