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
        <Button
          @click="isVacancyCreateDialogVisible = true"
          label="Создать вакансию"
          icon="pi pi-plus"
          size="small"
        />
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
        <Button
          @click="isOrganizationCreateDialogVisible = true"
          label="Создать организацию"
          icon="pi pi-plus"
          size="small"
        />
      </section>
    </div>

    <OrganizationCreateDialog
      @submit="onCreateOrganization"
      v-model:visible="isOrganizationCreateDialogVisible"
    />
    <VacancyCreateDialog
      @submit="onCreateVacancy"
      :organizations="organizationListResponse?.organizations ?? []"
      v-model:visible="isVacancyCreateDialogVisible"
    />
  </div>
</template>

<script setup lang="ts">
import type { OrganizationCreateEvent } from "~/types/organization"
import { VacancyStatus, type VacancyCreateEvent } from "~/types/vacancy"

const { user } = useAuth()

const toast = useToast()

if (!user.value) {
  await navigateTo({ name: "auth-login" })
}

const { data: vacancyListResponse, status: vacancyListStatus } = useVacancyList(
  {
    take: 5,
    skip: 0,
    userIds: [user.value!.id],
    statuses: [
      VacancyStatus.ACTIVE,
      VacancyStatus.PENDING,
      VacancyStatus.SUSPENDED,
    ],
  }
)
const { data: organizationListResponse, status: organizationListStatus } =
  useOrganizationList({
    take: 5,
    skip: 0,
  })

const isOrganizationCreateDialogVisible = ref<boolean>(false)
const isVacancyCreateDialogVisible = ref<boolean>(false)

const runtimeConfig = useRuntimeConfig()

const onCreateOrganization = async (event: OrganizationCreateEvent) => {
  try {
    await $fetch("/v1/organizations/", {
      baseURL: runtimeConfig.public.apiBaseUrl,
      method: "POST",
      body: {
        name: event.name,
        description: event.description,
      },
      credentials: "include",
    })
    toast.add({
      severity: "success",
      summary: "Успех",
      detail:
        "Организация успешно создана. Ожидайте публикации после одобрения модератором",
    })
  } catch (error) {
    toast.add({
      severity: "error",
      summary: "Ошибка",
      detail: "Не удалось создать организацию",
    })
  } finally {
    isOrganizationCreateDialogVisible.value = false
  }
}

const onCreateVacancy = async (event: VacancyCreateEvent) => {
  try {
    await $fetch("/v1/vacancies/", {
      baseURL: runtimeConfig.public.apiBaseUrl,
      method: "POST",
      body: {
        title: event.title,
        description: event.description,
        salary_from: event.salaryFrom,
        salary_to: event.salaryTo,
        salary_type: event.salaryType,
        type: event.type,
        organization_id: event.organizationId,
      },
      credentials: "include",
    })
    toast.add({
      severity: "success",
      summary: "Успех",
      detail:
        "Вакансия успешно создана. Ожидайте публикации после одобрения модератором",
    })
  } catch (error) {
    toast.add({
      severity: "error",
      summary: "Ошибка",
      detail: "Не удалось создать вакансию",
    })
  } finally {
    isVacancyCreateDialogVisible.value = false
  }
}
</script>
