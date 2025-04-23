<template>
  <Form
    :resolver
    @submit="onSubmit"
    class="flex flex-col gap-y-4 py-2"
    :validate-on-blur="false"
    :validate-on-submit="true"
  >
    <FormField v-slot="$field" name="title">
      <FloatLabel variant="on">
        <InputText fluid :id="nameFieldId" />
        <label :for="nameFieldId">Название</label>
      </FloatLabel>
      <Message
        v-if="$field?.invalid"
        severity="error"
        size="small"
        variant="simple"
        >{{ $field.error.message }}</Message
      >
    </FormField>

    <FormField v-slot="$field" name="description">
      <FloatLabel variant="on">
        <Textarea fluid :id="descriptionFieldId" />
        <label :for="descriptionFieldId">Описание</label>
      </FloatLabel>
      <Message
        v-if="$field?.invalid"
        severity="error"
        size="small"
        variant="simple"
        >{{ $field.error.message }}</Message
      >
    </FormField>

    <FormField v-slot="$field" name="type">
      <FloatLabel variant="on">
        <Select
          fluid
          :id="typeFieldId"
          :options="vacancyTypeOptions"
          option-value="value"
          option-label="label"
        />
        <label :for="typeFieldId">Тип вакансии</label>
      </FloatLabel>
      <Message
        v-if="$field?.invalid"
        severity="error"
        size="small"
        variant="simple"
        >{{ $field.error.message }}</Message
      >
    </FormField>

    <FormField v-slot="$field" name="organizationId">
      <FloatLabel variant="on">
        <Select
          fluid
          :id="organizationFieldId"
          option-label="name"
          option-value="id"
          :options="organizations"
        />
        <label :for="organizationFieldId">Организация</label>
      </FloatLabel>
      <p class="text-xs text-gray-400">
        Если необходимая вам организация отсутствует, вы можете отправить заявку
        на создание
      </p>
      <Message
        v-if="$field?.invalid"
        severity="error"
        size="small"
        variant="simple"
        >{{ $field.error.message }}</Message
      >
    </FormField>

    <FormField v-slot="$field" name="salaryFrom">
      <FloatLabel variant="on">
        <InputNumber fluid :id="salaryFromFieldId" />
        <label :for="salaryFromFieldId">Зарплата от</label>
      </FloatLabel>
      <Message
        v-if="$field?.invalid"
        severity="error"
        size="small"
        variant="simple"
        >{{ $field.error.message }}</Message
      >
    </FormField>

    <FormField v-slot="$field" name="salaryTo">
      <FloatLabel variant="on">
        <InputNumber fluid :id="salaryToFieldId" />
        <label :for="salaryToFieldId">Зарплата до</label>
      </FloatLabel>
      <Message
        v-if="$field?.invalid"
        severity="error"
        size="small"
        variant="simple"
        >{{ $field.error.message }}</Message
      >
    </FormField>

    <FormField v-slot="$field" name="salaryType">
      <FloatLabel variant="on">
        <Select
          fluid
          :id="salaryTypeFieldId"
          :options="salaryTypeOptions"
          option-value="value"
          option-label="label"
        />
        <label :for="salaryTypeFieldId">Тип зарплаты</label>
      </FloatLabel>
      <Message
        v-if="$field?.invalid"
        severity="error"
        size="small"
        variant="simple"
        >{{ $field.error.message }}</Message
      >
    </FormField>

    <Button type="submit" icon="pi pi-check" label="Сохранить" />
  </Form>
</template>

<script setup lang="ts">
import { z } from "zod"
import { zodResolver } from "@primevue/forms/resolvers/zod"
import {
  VacancySalaryType,
  VacancyType,
  type VacancyCreateEvent,
} from "~/types/vacancy"
import type { FormSubmitEvent } from "@primevue/forms"

const emit = defineEmits<{
  submit: [event: VacancyCreateEvent]
}>()

interface Organization {
  id: number
  name: string
}

const props = defineProps<{
  organizations: Organization[]
}>()

const nameFieldId = useId()
const descriptionFieldId = useId()
const typeFieldId = useId()
const organizationFieldId = useId()
const salaryFromFieldId = useId()
const salaryToFieldId = useId()
const salaryTypeFieldId = useId()

const vacancyTypeOptions = [
  { label: "Полная занятость", value: VacancyType.FULL_TIME },
  { label: "Частичная занятость", value: VacancyType.PART_TIME },
  { label: "Удаленная работа", value: VacancyType.REMOTE },
  { label: "Стажировка", value: VacancyType.INTERNSHIP },
]
const salaryTypeOptions = [
  { label: "Почасовая", value: VacancySalaryType.HOURLY },
  { label: "Оклад", value: VacancySalaryType.MONTHLY },
  { label: "Проектная работа", value: VacancySalaryType.PROJECT_BASED },
]

const resolver = zodResolver(
  z.object({
    title: z
      .string({ message: "Введите должность вакансии" })
      .min(1, { message: "Минимальная длина 1 символ" })
      .max(255, { message: "Максимальная длина 255 символов" }),
    description: z
      .string({ message: "Введите описание вакансии" })
      .min(1, { message: "Минимальная длина 1 символ" })
      .max(4096, { message: "Максимальная длина 4096 символов" }),
    salaryFrom: z
      .number({ message: "Введите сумму зарплаты ОТ" })
      .min(1, { message: "Минимальное значение 1" })
      .max(1_000_000_000, { message: "Максимальное значение 1.000.000.000" }),
    salaryTo: z
      .number({ message: "Введите сумму зарплаты ДО" })
      .min(1, { message: "Минимальное значение 1" })
      .max(1_000_000_000, { message: "Максимальное значение 1.000.000.000" }),
    type: z.nativeEnum(VacancyType),
    salaryType: z.nativeEnum(VacancySalaryType),
    organizationId: z.number(),
  })
)

const onSubmit = ({ values, valid }: FormSubmitEvent) => {
  if (valid) {
    emit("submit", values as VacancyCreateEvent)
  }
}
</script>
