<template>
    <AuthLayout>
      <form @submit.prevent="sendRecoveryEmail()">
        <h1 class="text-gray-800 font-semibold text-[36px] md:text-[40px] mb-9">
          Recuperar contraseña
        </h1>
        <div
          v-show="!mailSent"
          class="mb-6"
        >
          <label
            for="email"
            class="mb-3 block"
          >
            Ingrese su correo para reestablecer su contraseña</label
          >
          <InputComponent
            v-model="email"
            id="email"
            type="text"
            class="mb-2"
            placeholder="@ecomac.cl"
          />
          <div class="text-sm text-red-600 ml-1">
            {{ error }}
          </div>
        </div>
        <p
          v-show="mailSent"
          class="mb-16"
        >
          Te hemos enviado un email de confirmación para que puedas restablecer tu
          contraseña.
        </p>
        <div class="flex flex-col items-end gap-9 mt-9">
          <ButtonComponent
            v-show="!mailSent"
            color="primary"
            class="w-full max-w-56 rounded-lg py-[15px]"
            :disabled="!email"
            type="submit"
          >
            {{ isLoading ? 'Enviando...' : 'Recuperar contraseña' }}
          </ButtonComponent>
          <!--<RouterLink
            to="/inicio-sesion"
            v-show="mailSent"
            class="w-full max-w-56 rounded-lg"
          >
            <ButtonComponent
              color="primary"
              class="w-full max-w-56 rounded-lg py-[15px]"
              >Volver
            </ButtonComponent>
          </RouterLink>-->
        </div>
      </form>
    </AuthLayout>
  </template>
  <script setup lang="ts">
    import AuthLayout from 'src/layout/AuthLayout.vue';
    import InputComponent from 'src/components/elements/InputComponent.vue';
    import ButtonComponent from 'src/components/elements/ButtonComponet.vue';
    import { ref } from 'vue';
    import {login} from 'src/store/authStore.ts';
  
    const email = ref(null);
    const password = ref(null);
  
    const loginForm = async () => {
      try {
        const status = await login(email.value, password.value);
        console.log('Estado de la respuesta:', status);
          } 
          catch (error) {
            console.error('Error al iniciar sesión:', error);
          }
        };
  
  </script>
