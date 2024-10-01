<template>
    <AuthLayout>
      <form @submit.prevent="loginForm">
  
      <h1
        class="text-gray-800 font-semibold text-[36px] md:text-[55px] mb-9 text-nowrap"
      >
        Iniciar Sesión
      </h1>
      <label
        for="email"
        class="mb-3 block"
      >
        Ingrese su email de usuario</label
      >
      <InputComponent
        v-model="email"
        id="email"
        type="email"
        autocomplete="email"
        class="mb-6"
        placeholder="@ecomac.cl"
      />
      <label
        for="password"
        class="mb-3 block"
      >
        Ingrese su contraseña</label
      >
      <InputComponent
        v-model="password"
        id="password"
        type="password"
        autocomplete="current-password"
        class="mb-6"
        placeholder="contraseña"
      />
      <div class="flex flex-col items-end gap-9 mt-9">
        <a href="/recuperar-contraseña" class="text-sky-500 hover:underline">¿Olvidó contraseña?</a>
        <ButtonComponent
        :disabled="!email || !password"
          color="primary"
          class="w-full max-w-56 rounded-lg py-[15px]"
          type="submit"
          >Ingresar</ButtonComponent
        >
      </div>
    </form>
    </AuthLayout>
  </template>

<script setup lang="ts">
import AuthLayout from 'src/layout/AuthLayout.vue';
import InputComponent from 'src/components/elements/InputComponent.vue';
import ButtonComponent from 'src/components/elements/ButtonComponet.vue';
import { ref } from 'vue';
import { login } from 'src/store/authStore.ts';

const email = ref(null);
const password = ref(null);

const loginForm = async () => {
  try {
    const status = await login(email.value, password.value);
    if (status === 200) {
      // Redirigir al home después de un inicio de sesión exitoso
      window.location.href = 'http://localhost:4321/';
    } else {
      console.log('Error: Estado de la respuesta', status);
    }
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
  }
};
</script>
