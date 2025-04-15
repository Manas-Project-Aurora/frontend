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
    <Button type="submit" icon="pi pi-check" label="Сохранить" />
  </Form>
</template>

<script setup lang="ts">
import { z } from "zod"
import { zodResolver } from "@primevue/forms/resolvers/zod"

const nameFieldId = useId()
const descriptionFieldId = useId()

const resolver = zodResolver(
  z.object({
    name: z
      .string({ message: "Введите название организации" })
      .min(1, { message: "Минимальная длина 1 символ" })
      .max(255, { message: "Максимальная длина 255 символов" }),
    description: z
      .string({ message: "Введите описание организации" })
      .min(1, { message: "Минимальная длина 1 символ" })
      .max(4096, { message: "Максимальная длина 4096 символов" }),
  })
)

const onSubmit = () => {}
</script>
