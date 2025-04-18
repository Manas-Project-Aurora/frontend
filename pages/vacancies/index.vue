<template>
  <div>
    <VacancyListDataView :vacancy-list-response="vacancyListResponse!"/>
  </div>
</template>

<script setup lang="ts">
const { data: vacancyListResponse } = await useVacancyList()
</script>
