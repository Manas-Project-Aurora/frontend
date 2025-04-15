<template>
    <Form :resolver @submit="onSubmit" class="flex flex-col gap-y-4 py-2">
      <FormField v-slot="$field" name="name">
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
          <Select fluid :id="typeFieldId" :options="Object.values(VacancyType)" />
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
  import { VacancyType } from "~/types/vacancy"
  
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
      organizationId: z.number(),
    })
  )
  
  const onSubmit = () => {}
  </script>
  