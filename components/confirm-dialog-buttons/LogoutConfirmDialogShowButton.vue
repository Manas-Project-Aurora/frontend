<template>
  <Button
    @click="onClick"
    icon="pi pi-sign-out"
    label="Выйти"
    text
    size="small"
    severity="contrast"
  />
  <ConfirmDialog />
</template>

<script setup lang="ts">
const confirm = useConfirm()

const { logout } = useAuth()

const onClick = (): void => {
  confirm.require({
    message: "Вы уверены что хотите выйти?",
    header: "Внимание",
    icon: "pi pi-exclamation-triangle",
    acceptProps: {
      label: "Да",
      severity: "danger",
    },
    async accept() {
      await logout()
      await navigateTo({ name: "auth-login" })
    },
    rejectProps: {
      label: "Нет",
      severity: "secondary",
    },
  })
}
</script>
