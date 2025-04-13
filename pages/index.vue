<template>
  <div></div>
</template>

<script setup lang="ts">
const { refreshToken } = useAuth()

await refreshToken()

const { data: vacanciesPage } = await useVacancyList()
</script>
