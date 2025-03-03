<template>
  <div class="flex justify-center">
  <div class="flex flex-col gap-y-0.5 mt-12 w-6xl">
    <VacancyListItem
      v-for="vacancy in vacancies"
      :key="vacancy.id"
      :vacancy="vacancy"
    />
  </div>
</div>
</template>

<script setup lang="ts">
import VacancyListItem from "./VacancyListItem.vue";

defineProps<{
  vacancies: any[];
}>();
</script>
