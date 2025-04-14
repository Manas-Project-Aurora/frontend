<template>
  <div>
    <OrganizationListDataView v-if="status === 'success'" :organization-list-response="organizationsPage!" />
    <Message v-else-if="status === 'error'">Ошибка</Message>
  </div>
</template>

<script setup lang="ts">
const { data: organizationsPage, status } = await useOrganizationList()
</script>
