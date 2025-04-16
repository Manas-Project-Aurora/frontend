<template>
  <div v-if="vacancy">
    <h1 class="text-2xl font-bold mb-2">{{ vacancy.title }}</h1>
    <p class="text-gray-700 mb-4">{{ vacancy.description }}</p>

    <div class="mb-4">
      <NuxtLink
        :to="`/organizations/${vacancy.organization_id}`"
        class="text-blue-500 underline"
      >
        {{ vacancy.organization_name }}
      </NuxtLink>
    </div>

    <div class="text-sm text-gray-500">
      <p><strong>Тип:</strong> {{ vacancy.type }}</p>
      <p>
        <strong>Зарплата:</strong>
        <SalaryDetail
          :salary-from="vacancy.salary_from"
          :salary-to="vacancy.salary_to"
          :salary-type="vacancy.salary_type"
        />
      </p>
      <p><strong>Статус:</strong> {{ vacancy.status }}</p>
    </div>
  </div>
  <div v-else-if="status === 'pending'">
    <p>Загрузка...</p>
  </div>
  <div v-else>
    <p>Не удалось загрузить вакансию.</p>
  </div>
</template>

<script setup lang="ts">
import { useVacancyDetail } from "~/composables/vacancy_detail"
import SalaryDetail from "~/components/SalaryDetail.vue"

const route = useRoute()
const id = Number(route.params.id)

const { data: vacancy, status, error } = useVacancyDetail({ id })
</script>
