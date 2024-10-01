<template>
    <button
      class="font-medium text-sm px-5 py-2.5 focus:outline-none rounded transition "
      :class="buttonClasses"
    >
      <slot></slot>
    </button>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  const buttonClasses = computed(() => {
    const colorVariants = {
      primary: 'text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:ring-sky-500 disabled:bg-gray-400 disabled:cursor-not-allowed',
      secondary: 'text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 disabled:bg-gray-400 disabled:cursor-not-allowed',
      highlight: 'text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:ring-sky-500',
      light: 'text-sky-600 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 border border-gray-300'
    }
  
  
    return colorVariants[props.color]
  })
  
  const props = defineProps({
    color: {
      type: String,
      default: 'primary'
    }
  })
  </script>
  
  <style scoped></style>
  