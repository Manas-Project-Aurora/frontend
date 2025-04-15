<template>
  <Dialog
    v-model:visible="visible"
    modal
    header="Создать вакансию"
    :style="{ width: '25rem' }"
    :draggable="false"
  >
    <VacancyCreateForm :organizations="[]" />
  </Dialog>
</template>

<script setup lang="ts">
const visible = defineModel<boolean>("visible", { default: false })
</script>
