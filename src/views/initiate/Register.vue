<script setup>
import Button from "@/components/base/Button.vue";
import Input from "@/components/base/Input.vue";
import { reactive, computed } from "vue";
import UserService from "@/service/UserService";
import route from "@/router";
import yup from "@/utils/yup";
import { Form, ErrorMessage } from "vee-validate";
import { useNotification } from "@kyvg/vue3-notification";

const notification = useNotification();

const state = reactive({
  email: "",
  password: "",
  name: "",
  loading: false,
  errorMessage: "",
  passwordValid: false,
  validationSchema: {
    name: yup.string().required().min(3),
    email: yup.string().required().email(),
    password: yup.string().required().min(8),
  },
});

const onSubmit = async () => {
  const createUser = await UserService.createUser({
    name: state.name,
    email: state.email,
    password: state.password,
  });
  if (createUser.data) {
    notification.notify({
      title: "Usuário criado com sucesso.",
      type: "success",
    });
    setTimeout(() => {
      route.push({ name: "initiate.login" });
    }, 2000);
  } else state.errorMessage = createUser.message;
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
      <Form
        class="mt-8 space-y-6"
        @submit="onSubmit"
        :validation-schema="state.validationSchema"
      >
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm">
          <div class="mb-2">
            <label for="name" class="sr-only">Nome</label>
            <Input
              v-model="state.name"
              id="name"
              name="name"
              type="text"
              autocomplete="name"
              required
              placeholder="Nome"
            />
            <ErrorMessage name="name" class="text-red-500" />
          </div>
          <div class="mb-2">
            <label for="email-address" class="sr-only">E-mail</label>
            <Input
              v-model="state.email"
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              required
              placeholder="E-mail"
            />
            <ErrorMessage name="email" class="text-red-500" />
          </div>
          <div class="mb-2">
            <label for="password" class="sr-only">Senha</label>
            <Input
              v-model="state.password"
              id="password"
              name="password"
              type="password"
              autocomplete="password"
              required
              placeholder="Senha"
            />
            <ErrorMessage name="password" class="text-red-500" />
          </div>
        </div>
        <div class="text-red-500 text-center">
          <span>{{ state.errorMessage }}</span>
        </div>
        <div>
          <Button label="Cadastrar" />
        </div>
      </Form>
      <div class="flex items-start justify-center">
        <div class="text-sm">
          <router-link
            :to="{ name: 'initiate.login' }"
            class="font-medium text-indigo-600 hover:text-indigo-500"
            >Já está cadastrado? Efetue o Login</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
