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

    <FormField v-slot="$field" name="confirmPassword">
      <FloatLabel variant="on">
        <Password
          fluid
          :feedback="false"
          input-id="confirmPassword"
          toggle-mask
        />
        <label for="confirmPassword">Подтвердите пароль</label>
      </FloatLabel>
      <Message
        v-if="$field?.invalid"
        severity="error"
        size="small"
        variant="simple"
        >{{ $field.error.message }}</Message
      >
    </FormField>

    <Button
      type="submit"
      severity="primary"
      label="Зарегистрироваться"
      icon="pi pi-user-plus"
      fluid
    />
    <NuxtLink :to="{ name: 'auth-login' }">
      <Button
        severity="secondary"
        label="Уже есть аккаунт?"
        icon="pi pi-user"
        fluid
      />
    </NuxtLink>
  </Form>
</template>

<script setup lang="ts">
import { z } from "zod"
import { zodResolver } from "@primevue/forms/resolvers/zod"
import type { FormSubmitEvent } from "@primevue/forms"
import type { RegisterFormSubmitEvent } from "~/types/register"

const emit = defineEmits<{ submit: [event: RegisterFormSubmitEvent] }>()

const resolver = ref(
  zodResolver(
    z.object({
      email: z.string({ message: "Введите ваш email" }).email(),
      password: z
        .string({ message: "Введите ваш пароль" })
        .min(8, { message: "Пароль должен содержать минимум 8 символов" }),
      confirmPassword: z
        .string({ message: "Подтвердите ваш пароль" })
        .min(8, { message: "Пароль должен содержать минимум 8 символов" })
        // .refine((val, ctx) => val === ctx.password, {
        //   message: "Пароли не совпадают",
        // }),
    })
  )
)

const onSubmit = async ({ values, valid }: FormSubmitEvent) => {
  if (valid) {
    emit("submit", { email: values.email, password: values.password })
  }
}
</script>
