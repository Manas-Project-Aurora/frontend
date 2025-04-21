<template>
  <div v-if="organization" class="p-6">
    <Card class="shadow-md rounded-2xl">
      <template #title>
        <div class="space-y-4">
          <img
            v-if="organization.logo_url"
            :src="organization.logo_url"
            alt="Логотип организации"
            class="max-h-32 object-contain mx-auto"
          />
          <div class="text-center">
            <h1 class="text-2xl font-bold">{{ organization.name }}</h1>
            <p class="text-gray-400 text-sm">{{ organization.description }}</p>
          </div>
        </div>
      </template>

      <template #content>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div>
            <p class="text-gray-600">
              <strong>Вакансий:</strong> {{ organization.vacancy_count }}
            </p>
            <p class="text-gray-600">
              <strong>Мероприятий:</strong> {{ organization.event_count }}
            </p>
            <p class="text-gray-600">
              <strong>Видео:</strong> {{ organization.video_count }}
            </p>
          </div>
          <div>
            <p class="text-gray-600">
              <strong>Создана:</strong>
              {{ new Date(organization.created_at).toLocaleDateString() }}
            </p>
            <p class="text-gray-600">
              <strong>Обновлена:</strong>
              {{ new Date(organization.updated_at).toLocaleDateString() }}
            </p>
          </div>
        </div>

        <Divider class="my-4" />

        <div v-if="organization.contacts.length" class="space-y-2">
          <h2 class="text-lg font-semibold mb-2">Контакты</h2>
          <div
            v-for="(contact, index) in organization.contacts"
            :key="index"
            class="flex items-center gap-2 text-sm text-gray-700"
          >
            <i :class="iconMap[contact.type]" class="text-primary"></i>
            <a
              v-if="contact.type === 'email'"
              :href="`mailto:${contact.value}`"
              class="hover:underline"
            >
              {{ contact.value }}
            </a>
            <a
              v-else-if="contact.type === 'phone'"
              :href="`tel:${contact.value}`"
              class="hover:underline"
            >
              {{ contact.value }}
            </a>
            <a
              v-else-if="contact.type === 'telegram'"
              :href="`https://t.me/${contact.value.replace('@', '')}`"
              target="_blank"
              class="hover:underline"
            >
              {{ contact.value }}
            </a>
            <a
              v-else-if="contact.type === 'website'"
              :href="contact.value"
              target="_blank"
              class="hover:underline"
            >
              {{ contact.value }}
            </a>
            <span v-else>{{ contact.value }}</span>
          </div>
        </div>
      </template>
    </Card>
  </div>

  <div v-else-if="error">
    <p class="p-6 text-red-500">Ошибка загрузки данных</p>
  </div>
</template>

<script setup lang="ts">
import Card from "primevue/card"
import Divider from "primevue/divider"

const route = useRoute()
const organizationId = Number(route.params.id)
const { data: organization, error } = await useOrganizationDetail(
  organizationId
)

const iconMap: Record<string, string> = {
  email: "pi pi-envelope",
  phone: "pi pi-phone",
  telegram: "pi pi-send",
  website: "pi pi-globe",
}
</script>
