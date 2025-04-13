<template>
  <div class="flex justify-center">
    <div class="flex flex-col gap-y-4 mt-12 w-6xl">
      <DataView 
        :value="organizations" 
        paginator 
        :rows="10" 
        layout="list"
        :key="organizations.length"
      >
        <template #list="slotProps">
          <div v-if="slotProps.items.length > 0" class="flex flex-col gap-y-4">
            <OrganizationListItem 
              v-for="org in slotProps.items" 
              :key="org.id" 
              :organization="org" 
              @click="goToDetail(org.id)"
              class="cursor-pointer"
            />
          </div>
          <div v-else class="text-center text-gray-500 mt-4">
            Нет доступных организаций
          </div>
        </template>
      </DataView>
    </div>
  </div>
</template>

<script setup lang="ts">
import DataView from 'primevue/dataview';
import OrganizationListItem from "./OrganizationListItem.vue";

interface Organization {
  id: number;
  name: string;
  logo?: string;
  vacanciesCount: number;
  eventsCount: number;
  videoCount: number;
}

defineProps<{ organizations: Organization[] }>();

const goToDetail = (id: number) => {
  console.log("Переход к организации ID:", id);
  // Используем navigateTo для перехода по имени маршрута с параметром id
  navigateTo({ name: 'organizations-id', params: { id } });
};
</script>
