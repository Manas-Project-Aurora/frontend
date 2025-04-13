<template>
  <Form
    v-slot="$form"
    :resolver
    @submit="onSubmit"
    class="flex flex-col gap-4 w-full sm:w-68"
    :validate-on-blur="false"
    :validate-on-mount="false"
    :validate-on-submit="true"
    :validate-on-value-update="false"
  >
    <FormField v-slot="$field" name="email">
      <FloatLabel variant="on">
        <InputText type="email" fluid id="email" />
        <label for="email">Email</label>
      </FloatLabel>

      <Message
        v-if="$field?.invalid"
        severity="error"
        size="small"
        variant="simple"
        >{{ $field.error.message }}</Message
      >
    </FormField>
    <FormField v-slot="$field" name="password">
      <FloatLabel variant="on">
        <Password fluid :feedback="false" input-id="password" toggle-mask />
        <label for="password">Пароль</label>
      </FloatLabel>
      <Message
        v-if="$field?.invalid"
        severity="error"
        size="small"
        variant="simple"
        >{{ $field.error.message }}</Message
      >
    </FormField>
    <Button type="submit" severity="primary" label="Войти" icon="pi pi-check" />
    <NuxtLink :to="{ name: 'auth-register' }">
      <Button
        severity="secondary"
        label="Впервые у нас?"
        icon="pi pi-user-plus"
        fluid
      />
    </NuxtLink>
  </Form>
</template>

<script setup lang="ts">
import { z } from "zod"
import { zodResolver } from "@primevue/forms/resolvers/zod"
import type { FormSubmitEvent } from "@primevue/forms"
import type { LoginFormSubmitEvent } from "~/types/login"

const emit = defineEmits<{
  submit: [event: LoginFormSubmitEvent]
}>()

const resolver = ref(
  zodResolver(
    z.object({
      email: z.string({ message: "Введите ваш email " }).email(),
      password: z
        .string({ message: "Введите ваш пароль" })
        .min(8, { message: "Пароль должен содержать минимум 8 символов" }),
    })
  )
)

const onSubmit = async ({ values, valid }: FormSubmitEvent) => {
  if (valid) {
    emit("submit", { email: values.email, password: values.password })
  }
}
</script>
