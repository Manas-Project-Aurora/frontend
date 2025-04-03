<template>
  <div class="flex justify-center mt-6">
    <Card>
      <template #title>
        <h2 class="text-center text-xl font-bold mb-1">Вход в систему</h2>
      </template>
      <template #content>
        <LoginForm />
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import type { LoginFormSubmitEvent } from "~/types/login"


const onLogin = (event: LoginFormSubmitEvent) => {}
</script>
