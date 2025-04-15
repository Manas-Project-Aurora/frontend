<template>
  <div class="py-3">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-8">
      <ListItemsSkeleton v-if="vacancyListStatus === 'pending'" />
      <section
        v-else-if="vacancyListStatus === 'success'"
        class="flex flex-col gap-y-4"
      >
        <h4 class="text-xl font-semibold">Ваши последние вакансии</h4>
        <VacancyListDataView :vacancy-list-response="vacancyListResponse!" />
        <Button label="Создать вакансию" icon="pi pi-plus" size="small" />
      </section>

      <ListItemsSkeleton v-if="organizationListStatus === 'pending'" />
      <section
        v-else-if="organizationListStatus === 'success'"
        class="flex flex-col gap-y-4"
      >
        <h4 class="text-xl font-semibold">Ваши организации</h4>
        <OrganizationListDataView
          :organization-list-response="organizationListResponse!"
        />
        <Button label="Создать организацию" icon="pi pi-plus" size="small" />
      </section>

    </div>
  </div>
</template>

<script setup lang="ts">
const { user } = useAuth()

if (!user) {
  await navigateTo({ name: "auth-login" })
}

const { data: vacancyListResponse, status: vacancyListStatus } = useVacancyList(
  {
    take: 5,
    skip: 0,
    userIds: [user.value!.id],
  }
)
const { data: organizationListResponse, status: organizationListStatus } =
  useOrganizationList({
    take: 5,
    skip: 0,
  })
</script>
