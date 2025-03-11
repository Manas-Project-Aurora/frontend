<template>
    <VacancyList :vacancies="vacancies"/>
</template>

<script setup lang="ts">
import VacancyList from '~/components/VacancyList.vue';

const vacancies = [
  {
    id: 1,
    organization_name: "Tech Corp",
    salary_from: "1500",
    salary_to: "2500",
    currency: "USD",
    title: "Frontend Developer",
  },
  {
    id: 2,
    organization_name: "Innovate LLC",
    salary_from: "2000",
    salary_to: "3000",
    currency: "EUR",
    title: "Backend Developer",
  },
  {
    id: 3,
    organization_name: "Startup Inc.",
    salary_from: "1000",
    salary_to: "2000",
    currency: "USD",
    title: "QA Engineer",
  },
];

</script>