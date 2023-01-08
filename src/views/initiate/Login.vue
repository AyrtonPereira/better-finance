<script setup>
import Button from "@/components/base/Button.vue";
import Input from "@/components/base/Input.vue";
import { reactive, computed } from "vue";
import UserService from "@/service/UserService";
import route from "@/router";

const state = reactive({
  email: "",
  password: "",
  loading: false,
  errorMessage: "",
});

const canLogin = computed(() => {
  return state.email !== "" && state.password !== "";
});

const verifyLogin = async () => {
  state.loading = true;
  state.errorMessage = "";

  const login = await UserService.login(state.email, state.password);
  if (!login.data) state.errorMessage = login.message;
  else route.push({ name: "app" });
  state.loading = false;
};
</script>

<template>
  <div
    class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="w-full max-w-md space-y-8">
      <div>
        <img
          class="mx-auto h-12 w-auto"
          src="@/assets/logo.png"
          alt="Your Company"
        />
        <h2
          class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"
        >
          Better Finance
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Acompanhe cotações e finanças
        </p>
      </div>
      <div class="mt-8 space-y-6">
        <div class="-space-y-px rounded-md shadow-sm">
          <div class="mb-2">
            <label for="email-address" class="sr-only">Email</label>
            <Input
              v-model="state.email"
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              required=""
              placeholder="E-mail"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <Input
              v-model="state.password"
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required=""
              placeholder="Senha"
            />
          </div>
        </div>
        <div class="text-red-500 text-center">
          <span>{{ state.errorMessage }}</span>
        </div>
        <div>
          <Button
            label="Entrar"
            @click="verifyLogin"
            :disabled="!canLogin || state.loading"
          />
        </div>
      </div>
      <div class="flex items-start justify-center">
        <div class="text-sm">
          <router-link
            :to="{
              name: 'initiate.register',
            }"
            class="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Registre-se</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
