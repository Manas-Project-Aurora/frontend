<template>
  <div class="bg-gray-100 px-4 py-3 flex items-center justify-between rounded-md hover:cursor-pointer">
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
