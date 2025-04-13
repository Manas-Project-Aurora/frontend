<template>
  <span>{{ salaryRangeText }} KGS {{ salaryTypeText }}</span>
</template>

<script setup lang="ts">
import { VacancySalaryType } from "~/types/vacancy"

const props = defineProps<{
  salaryFrom: number | null
  salaryTo: number | null
  salaryType: VacancySalaryType
}>()

const salaryRangeText = computed((): string => {
  if (props.salaryFrom === null && props.salaryTo === null) {
    return "договорная"
  }
  if (props.salaryFrom !== null && props.salaryTo !== null) {
    return `${props.salaryFrom}-${props.salaryTo}`
  }
  if (props.salaryTo !== null && props.salaryFrom === null) {
    return `от ${props.salaryFrom}`
  }
  return `до ${props.salaryTo}`
})

const salaryTypeText = computed((): string => {
  switch (props.salaryType) {
    case VacancySalaryType.HOURLY:
      return "в час"
    case VacancySalaryType.PROJECT_BASED:
      return "за проект"
    case VacancySalaryType.MONTHLY:
      return "в месяц"
    default:
      return props.salaryType
  }
})
</script>
