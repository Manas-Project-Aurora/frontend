<template>
  <DataView :value="vacancyListResponse.vacancies" data-key="id">
    <template #list="{ items: vacancies }: { items: VacancyListItem[] }">
      <Card v-for="vacancy in vacancies">
        <template #title><span class="text-lg">{{ vacancy.title }}</span></template>
        <template #subtitle>
          <SalaryDetail
            :salary-from="vacancy.salary_from"
            :salary-to="vacancy.salary_to"
            :salary-type="vacancy.salary_type"
          />
        </template>
        <template #content>
          <section>
            <p class="text-md">Компания: {{ vacancy.organization_name }}</p>
          </section>
        </template>
      </Card>
    </template>
  </DataView>
</template>

<script setup lang="ts">
import type { VacancyListItem, VacancyListResponse } from "~/types/vacancy"

defineProps<{
  vacancyListResponse: VacancyListResponse
}>()
</script>
