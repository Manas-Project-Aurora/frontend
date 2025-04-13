<template>
  <!-- <Menubar :model="items"/> -->
  <Menubar :model="items">
    <template #item="{ item, props }">
      <NuxtLink :to="{ name: item.pageName }">
        <Button
          v-bind="props"
          :label="item.label"
          :icon="item.icon"
          text
          severity="contrast"
          size="small"
        />
      </NuxtLink>
    </template>
    <template #end>
      <template v-if="!isLoggedIn">
        <NuxtLink
          v-if="route.name !== 'auth-login'"
          :to="{ name: 'auth-login' }"
        >
          <Button
            icon="pi pi-user"
            label="Войти"
            text
            size="small"
            severity="contrast"
          />
        </NuxtLink>
        <NuxtLink v-else :to="{ name: 'auth-register' }">
          <Button
            icon="pi pi-user"
            label="Регистрация"
            text
            size="small"
            severity="contrast"
          />
        </NuxtLink>
      </template>
      <LogoutConfirmDialogShowButton v-else />
    </template>
  </Menubar>
</template>

<script setup lang="ts">
interface Item {
  label: string
  pageName: string
  icon?: string
}

const route = useRoute()

const { isLoggedIn } = useAuth()

const items: Item[] = [
  {
    label: "Вакансии",
    pageName: "vacancies",
    icon: "pi pi-fw pi-home",
  },
  {
    label: "Мероприятия",
    pageName: "events",
    icon: "pi pi-fw pi-calendar",
  },
  {
    label: "Видео",
    pageName: "videos",
    icon: "pi pi-fw pi-video",
  },
  {
    label: "Организации",
    pageName: "organizations",
    icon: "pi pi-fw pi-users",
  },
  {
    label: "Сообщество",
    pageName: "community",
    icon: "pi pi-fw pi-users",
  },
]
</script>
