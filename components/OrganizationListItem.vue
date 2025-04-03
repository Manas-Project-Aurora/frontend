<template>
  <div
    class="bg-gray-100 px-4 py-3 flex items-center justify-between rounded-md hover:cursor-pointer"
  >
    <!-- Левая часть: логотип и название организации -->
    <div class="flex items-center gap-2">
      <!-- Если у организации есть логотип, выводим его -->
      <img
        v-if="organization.logo"
        :src="organization.logo"
        alt="Organization Logo"
        class="w-8 h-8 rounded"
      />
      <div class="flex flex-col">
        <span class="text-xs text-gray-500">Компания</span>
        <span class="font-semibold text-black">
          {{ organization.name }}
        </span>
      </div>
    </div>

    <!-- Правая часть: колонки с цифрами -->
    <div class="flex items-center gap-8">
      <!-- Если хотите, можно использовать VacancyListItemSection 
             или любой другой небольшой компонент. -->
      <VacancyListItemSection
        title="Вакансии"
        :content="organization.vacanciesCount"
      />
      <VacancyListItemSection
        title="Мероприятия"
        :content="organization.eventsCount"
      />
      <VacancyListItemSection
        title="Видео"
        :content="organization.videoCount"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import VacancyListItemSection from "@/components/VacancyListItemSection.vue"

interface Organization {
  id: number
  name: string
  logo?: string
  vacanciesCount: number
  eventsCount: number
  videoCount: number
}

const props = defineProps<{
  organization: Organization
}>()
</script>
