<template>
  <div v-if="organization">
    <h1 class="text-2xl font-bold mb-2">{{ organization.name }}</h1>
    <p class="text-gray-700 mb-4">{{ organization.description }}</p>

    <div class="mb-4" v-if="organization.logo_url">
      <img
        :src="organization.logo_url"
        alt="Логотип"
        class="max-w-xs rounded"
      />
    </div>

    <div class="text-sm text-gray-500 space-y-1">
      <p><strong>Вакансий:</strong> {{ organization.vacancy_count }}</p>
      <p><strong>Мероприятий:</strong> {{ organization.event_count }}</p>
      <p><strong>Видео:</strong> {{ organization.video_count }}</p>
      <p>
        <strong>Создана:</strong>
        {{ new Date(organization.created_at).toLocaleDateString() }}
      </p>
      <p>
        <strong>Обновлена:</strong>
        {{ new Date(organization.updated_at).toLocaleDateString() }}
      </p>
    </div>
  </div>
  <div v-else-if="status">
    <p>Загрузка...</p>
  </div>
  <div v-else-if="error">
    <p class="text-red-500">Ошибка загрузки данных</p>
  </div>
</template>

<script setup lang="ts">
import { useOrganizationDetail } from "~/composables/organization_detail"

const route = useRoute()
const id = Number(route.params.id)
const { data: organization, status, error } = useOrganizationDetail({ id })
</script>
