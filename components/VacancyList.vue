<template>
  <div class="flex justify-center">
    <div class="flex flex-col gap-y-4 mt-12 w-6xl">
      <!-- Ensure vacancies is not empty or undefined -->
      <DataView 
        v-if="vacancies && vacancies.length > 0"
        :value="vacancies" 
        paginator 
        :rows="10" 
        layout="list"
        :key="vacancies.length"
      >
        <template #list="slotProps">
          <div v-if="slotProps.items.length > 0" class="flex flex-col gap-y-4">
            <VacancyListItem 
              v-for="vacancy in slotProps.items" 
              :key="vacancy.id" 
              :vacancy="vacancy"
              @click="goToDetail(vacancy.id)"
              class="cursor-pointer"
            />
          </div>
          <div v-else class="text-center text-gray-500 mt-4">
            Нет доступных вакансий
          </div>
        </template>
      </DataView>
      <div v-else class="text-center text-gray-500 mt-4">
        Загружаются вакансии...
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import VacancyListItem from "./VacancyListItem.vue"

defineProps<{
  vacancies: any[]
}>()
</script>
