<template>
  <Dialog
    v-model:visible="visible"
    modal
    header="Создать вакансию"
    :style="{ width: '25rem' }"
    :draggable="false"
  >
    <VacancyCreateForm @submit="emit('submit', $event)" :organizations="organizations" />
  </Dialog>
</template>

<script setup lang="ts">
import type { OrganizationListItem } from "~/types/organization"
import type { VacancyCreateEvent } from "~/types/vacancy";

defineProps<{ organizations: OrganizationListItem[] }>()

const emit = defineEmits<{
  submit: [event: VacancyCreateEvent]
}>()

const visible = defineModel<boolean>("visible", { default: false })
</script>
