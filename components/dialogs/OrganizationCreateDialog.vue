<template>
  <Dialog
    v-model:visible="visible"
    modal
    header="Создать организацию"
    :style="{ width: '25rem' }"
    :draggable="false"
  >
    <OrganizationCreateForm />
  </Dialog>
</template>

<script setup lang="ts">
const visible = defineModel<boolean>("visible", { default: false })
</script>
