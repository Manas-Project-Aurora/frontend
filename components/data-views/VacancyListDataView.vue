<template>
  <DataView :value="vacancyListResponse.vacancies" data-key="id">
    <template #list="{ items: vacancies }: { items: VacancyListItem[] }">
      <RouterLink
        v-for="vacancy in vacancies"
        :key="vacancy.id"
        :to="`/vacancies/${vacancy.id}`"
        class="no-underline"
      >
        <Card
          class="transition-transform hover:shadow-lg hover:-translate-y-1 cursor-pointer mb-4"
        >
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
          <template #footer>
            <Tag value="Ожидание публикации" severity="warn" v-if="vacancy.status === VacancyStatus.PENDING"/>
            <Tag value="В архиве" severity="secondary" v-else-if="vacancy.status === VacancyStatus.SUSPENDED"/>
          </template>
        </Card>
      </RouterLink>
    </template>
  </DataView>
</template>


<script setup lang="ts">
import { VacancyStatus, type VacancyListItem, type VacancyListResponse } from "~/types/vacancy"

defineProps<{
  vacancyListResponse: VacancyListResponse
}>()
</script>
