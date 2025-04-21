<template>
  <div v-if="vacancy && organization" class="p-4 space-y-6">
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
              :to="{
                name: 'organizations-id',
                params: { id: organization.id },
              }"
              class="text-xl font-semibold text-blue-600 hover:underline"
            >
              {{ organization.name }}
            </NuxtLink>
            <p class="text-sm text-gray-400">
              Основана: {{ formatDate(organization.created_at) }}
            </p>
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

    <Card>
      <template #title>
        <span class="text-lg font-semibold">О компании</span>
      </template>

      <template #content>
        <p v-if="organization.description" class="text-gray-400 mb-4">
          {{ organization.description }}
        </p>

        <div class="flex gap-4 text-sm text-gray-400 mb-4">
          <p>
            <i class="pi pi-briefcase mr-1" /> Вакансий:
            {{ organization.vacancy_count }}
          </p>
          <p>
            <i class="pi pi-calendar mr-1" /> Событий:
            {{ organization.event_count }}
          </p>
          <p>
            <i class="pi pi-video mr-1" /> Видео: {{ organization.video_count }}
          </p>
        </div>

        <Divider />

        <div class="text-sm space-y-2 text-gray-400">
          <template
            v-for="contact in organization.contacts"
            :key="contact.created_at"
          >
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
    <p
      v-if="
        vacancyFetchStatus === 'pending' &&
        organizationFetchStatus === 'pending'
      "
    >
      Загрузка...
    </p>
    <p v-else class="text-red-500">
      Не удалось загрузить вакансию или компанию.
    </p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const vacancyId = Number(route.params.id)
const { data: vacancy, status: vacancyFetchStatus } = await useVacancyDetail(
  vacancyId
)

const { data: organization, status: organizationFetchStatus } =
  await useOrganizationDetail(vacancy.value!.organization_id)

// Иконки для контактов
const iconMap: Record<string, string> = {
  email: "pi pi-envelope",
  phone: "pi pi-phone",
  telegram: "pi pi-send",
  website: "pi pi-globe",
}

const formatDate = (dateStr: string): string => {
  try {
    const date = new Date(dateStr)
    return date.toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  } catch {
    return dateStr
  }
}
</script>
