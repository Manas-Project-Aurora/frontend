<template>
  <!-- Контейнер для списка организаций -->
  <div class="flex justify-center">
    <div class="flex flex-col gap-y-2 mt-12 w-6xl">
      <OrganizationListItem
        v-for="org in organizations"
        :key="org.id"
        :organization="org"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import OrganizationListItem from "./OrganizationListItem.vue"

defineProps<{
  organizations: any[]
}>();
</script>
