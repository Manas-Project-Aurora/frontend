<template>
  <DataView :value="organizationListResponse.organizations" data-key="id">
    <template
      #list="{ items: organizations }: { items: OrganizationListItem[] }"
    >
      <div class="flex flex-col gap-y-4 my-4">
        <Card v-for="organization in organizations">
          <template #content>
            <div class="flex justify-between items-center">
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
      </div>
    </template>
  </DataView>
</template>

<script setup lang="ts">
import type {
  OrganizationListResponse,
  OrganizationListItem,
} from "~/types/organization"

defineProps<{
  organizationListResponse: OrganizationListResponse
}>()
</script>
