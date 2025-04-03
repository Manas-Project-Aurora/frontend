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

const onRegister = (event: RegisterFormSubmitEvent) => {
  toast.add({
    severity: "success",
    summary: "Вы успешно вошли в систему",
    life: 5000,
  })
}
</script>
