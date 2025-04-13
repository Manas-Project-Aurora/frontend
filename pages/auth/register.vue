<template>
  <div class="flex justify-center mt-6">
    <Toast />
    <Card>
      <template #title>
        <h2 class="text-center text-xl font-bold mb-1">Регистрация</h2>
      </template>
      <template #content>
        <RegisterForm @submit="onRegister" />
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import type { RegisterFormSubmitEvent } from "~/types/register"

const toast = useToast()
const { register } = useAuth()

const onRegister = async (event: RegisterFormSubmitEvent) => {
  const isSuccess = await register(event.email, event.password)
  if (isSuccess) {
    toast.add({
      severity: "success",
      summary: "Вы успешно зарегистрировались",
      life: 5000,
    })
    await navigateTo({ name: "index" })
  } else {
    toast.add({
      severity: "error",
      summary: "Ошибка регистрации",
      detail: "Пожалуйста, проверьте введенные данные.",
      life: 5000,
    })
  }
}
</script>
