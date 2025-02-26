<template>
  <div>
    <h1 class="text-gray-400 text-2xl font-semibold">Последние вакансии</h1>
    <VacancyList :vacancies="vacancies!" />
  </div>
</template>

<script setup lang="ts">
const baseURL = "http://localhost:3001";
const { data: vacancies } = await useFetch("/vacancies", {
  baseURL,
  transform(data: { vacancies: any[] }) {
    return data.vacancies;
  },
});
</script>
