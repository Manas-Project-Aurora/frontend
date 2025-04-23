<template>
  <Dialog
    v-model:visible="visible"
    modal
    header="Создать организацию"
    :style="{ width: '25rem' }"
    :draggable="false"
  >
    <OrganizationCreateForm @submit="emit('submit', $event)" />
  </Dialog>
</template>

<script setup lang="ts">
import type { OrganizationCreateEvent } from "~/types/organization"

const visible = defineModel<boolean>("visible", { default: false })

const emit = defineEmits<{
  submit: [event: OrganizationCreateEvent]
}>()
</script>
