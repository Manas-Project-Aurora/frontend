<template>
  <div class="flex flex-col gap-y-0.5">
    <VacancyListItem
      v-for="vacancy in vacancies"
      :key="vacancy.id"
      :vacancy="vacancy"
    />
  </div>
</template>

<script setup lang="ts">
import VacancyListItem from "./VacancyListItem.vue";

defineProps<{
  vacancies: any[];
}>();
</script>
