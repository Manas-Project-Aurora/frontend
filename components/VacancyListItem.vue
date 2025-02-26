<template>
  <div class="bg-gray-200 flex justify-between px-6 py-4">
    <VacancyListItemSection
      title="Компания"
      :content="vacancy.organization_name"
    />
    <VacancyListItemSection title="Должность" :content="vacancy.title" />
    <VacancyListItemSection
      title="Оклад"
      :content="`${vacancy.salary_from} - ${vacancy.salary_to} ${vacancy.currency}`"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  vacancy: any;
}>();
</script>
