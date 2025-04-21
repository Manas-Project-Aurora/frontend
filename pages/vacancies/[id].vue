<template>
  <div v-if="vacancy && organization" class="p-4 space-y-6">
    <!-- Вакансия -->
    <Card>
      <template #title>
        <div class="flex items-center gap-3">
          <Avatar
            :image="organization.logo_url || undefined"
            icon="pi pi-building"
            shape="circle"
            class="w-12 h-12"
          />
          <div>
            <NuxtLink
              :to="{ name: 'organizations-id', params: { id: organization.id } }"
              class="text-xl font-semibold text-blue-600 hover:underline"
            >
              {{ organization.name }}
            </NuxtLink>
            <p class="text-sm text-gray-400">Основана: {{ formatDate(organization.created_at) }}</p>
          </div>
        </div>
      </template>

      <template #content>
        <p class="text-2xl font-bold mb-2">{{ vacancy.title }}</p>
        <p class="text-gray-400 mb-4">{{ vacancy.description }}</p>

        <div class="text-sm text-gray-400 space-y-2">
          <p class="flex items-center gap-2">
            <i class="pi pi-briefcase" />
            <span><strong>Тип:</strong> {{ vacancy.type }}</span>
          </p>
          <p class="flex items-center gap-2">
            <i class="pi pi-wallet" />
            <span><strong>Зарплата:</strong></span>
            <SalaryDetail
              :salary-from="vacancy.salary_from"
              :salary-to="vacancy.salary_to"
              :salary-type="vacancy.salary_type"
            />
          </p>
        </div>
      </template>
    </Card>

    <!-- Компания -->
    <Card>
      <template #title>
        <span class="text-lg font-semibold">О компании</span>
      </template>

      <template #content>
        <p v-if="organization.description" class="text-gray-400 mb-4">
          {{ organization.description }}
        </p>

        <div class="flex gap-4 text-sm text-gray-400 mb-4">
          <p><i class="pi pi-briefcase mr-1" /> Вакансий: {{ organization.vacancy_count }}</p>
          <p><i class="pi pi-calendar mr-1" /> Событий: {{ organization.event_count }}</p>
          <p><i class="pi pi-video mr-1" /> Видео: {{ organization.video_count }}</p>
        </div>

        <Divider />

        <div class="text-sm space-y-2 text-gray-400">
          <template v-for="(contact, index) in organization.contacts" :key="index">
            <p v-if="contact.value" class="flex items-center gap-2">
              <i :class="iconMap[contact.type] || 'pi pi-info-circle'" />
              <span v-if="contact.type === 'website'">
                <a
                  :href="contact.value"
                  target="_blank"
                  class="text-blue-500 hover:underline"
                >
                  {{ contact.value }}
                </a>
              </span>
              <span v-else>{{ contact.value }}</span>
            </p>
          </template>
        </div>
      </template>
    </Card>
  </div>

  <div v-else class="p-4 text-center text-gray-400">
    <p v-if="status || orgStatus">Загрузка...</p>
    <p v-else class="text-red-500">Не удалось загрузить вакансию или компанию.</p>
  </div>
</template>

<script setup lang="ts">
import type { OrganizationListItem } from "~/types/organization";
import { ref, watchEffect } from "vue";
import { useVacancyDetail } from "~/composables/vacancy_detail";
import { useOrganizationDetail } from "~/composables/organization_detail";
import { useRoute } from "vue-router";
import SalaryDetail from "~/components/SalaryDetail.vue";

const route = useRoute();
const id = Number(route.params.id);
const { data: vacancy, status } = useVacancyDetail({ id });

// Определяем organization как ref, начиная со значения null
const organization = ref<OrganizationListItem | null>(null);
const orgStatus = ref(false);

// Следим за изменениями в vacancy и загружаем данные организации, когда они доступны
watchEffect(() => {
  const orgId = vacancy.value?.organization_id;
  if (orgId) {
    // Получаем детали организации с помощью composable; ожидаем, что он возвращает ref
    const orgDetails = useOrganizationDetail({ id: orgId });
    organization.value = orgDetails.data.value;
    orgStatus.value = orgDetails.status; // добавили статус для организации
  }
});

// Иконки для контактов
const iconMap: Record<string, string> = {
  email: "pi pi-envelope",
  phone: "pi pi-phone",
  telegram: "pi pi-send",
  website: "pi pi-globe",
};

const formatDate = (dateStr: string): string => {
  try {
    const date = new Date(dateStr);
    return date.toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}
</script>
