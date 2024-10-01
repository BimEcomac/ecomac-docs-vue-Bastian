<template>
    <main
      class="relative bg-[url('/img/auth-layout-background2.png')] bg-no-repeat bg-cover min-h-screen w-full flex justify-center sm:justify-end items-center lg:items-start"
    >
      <img
        src="/img/ecomac-docs-logo.png"
        alt="Logo Ecomac"
        class="absolute w-32 left-6 top-8 sm:w-64 sm:left-16 sm:top-12 cursor-pointer"
        @click="redirectToLogin"
      />
      <div
        class="bg-cyan-50 bg-opacity-75 w-full max-w-[539px] mx-6 lg:mr-28 mt-20 rounded-[40px] px-7 py-7 md:px-[44px] md:py-[44px]"
      >
        <p class="text-black text-[21px] mb-9">
          Documentacion interna <span class="text-sky-600 font-bold">ECOMAC-DOCS</span>
        </p>
        <slot></slot>
      </div>
    </main>
  </template>
  
  <script setup lang="ts">
  import '../tailwind.css';
  function redirectToLogin() {
    window.location.href = '../inicio-sesion'; // Redirige a la página de login
  }
  </script>
  
  <style scoped></style>
  