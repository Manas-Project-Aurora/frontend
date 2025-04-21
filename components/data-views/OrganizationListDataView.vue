<template>
  <DataView :value="organizationListResponse.organizations" data-key="id">
    <template
      #list="{ items: organizations }: { items: OrganizationListItem[] }"
    >
      <div class="flex flex-col gap-y-4">
        <NuxtLink
          v-for="organization in organizations"
          :key="organization.id"
          :to="{ name: 'organizations-id', params: { id: organization.id } }"
          class="no-underline"
        >
          <Card
            class="transition-transform hover:shadow-lg hover:-translate-y-1 cursor-pointer"
          >
            <template #content>
              <div
                class="flex justify-between items-start gap-y-4 sm:items-center flex-col sm:flex-row"
              >
                <div class="flex gap-x-4 items-center">
                  <NuxtImg
                    :src="organization.logo_url"
                    v-if="organization.logo_url"
                    width="50"
                  />
                  <div class="flex flex-col text-sm font-semibold">
                    <p>Компания</p>
                    <p>{{ organization.name }}</p>
                  </div>
                </div>
                <div class="flex text-sm font-semibold gap-x-6">
                  <div class="flex flex-col">
                    <p>Вакансии</p>
                    <p>{{ organization.vacancy_count }}</p>
                  </div>
                  <div class="flex flex-col">
                    <p>Мероприятия</p>
                    <p>{{ organization.event_count }}</p>
                  </div>
                  <div class="flex flex-col">
                    <p>Видео</p>
                    <p>{{ organization.video_count }}</p>
                  </div>
                </div>
              </div>
            </template>
          </Card>
        </NuxtLink>
      </div>
    </template>
  </DataView>
</template>

<script setup lang="ts">
import type {
  OrganizationListResponse,
  OrganizationListItem,
} from "~/types/organization"

const props = defineProps<{
  organizationListResponse: OrganizationListResponse
}>()
</script>
