<template>
  <div class="flex justify-center mt-6">
    <Toast />
    <Card>
      <template #title>
        <h2 class="text-center text-xl font-bold mb-1">Вход в систему</h2>
      </template>
      <template #content>
        <LoginForm @submit="onLogin" />
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import type { LoginFormSubmitEvent } from "~/types/login"

const toast = useToast()

const onLogin = (event: LoginFormSubmitEvent) => {
  toast.add({
    severity: "success",
    summary: "Вы успешно вошли в систему",
    life: 5000,
  })
}
</script>
