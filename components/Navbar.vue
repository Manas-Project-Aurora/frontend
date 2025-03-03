<template>
  <div class="flex justify-center items-center">
  <header class="flex items-center w-7xl justify-between h-16 px-4 md:px-8 relative">
    <NuxtLink
      class="text-2xl font-bold hover:cursor-pointer"
      :to="{ name: 'index' }"
      >Aurora</NuxtLink
    >

    <!-- Burger Icon (Mobile) -->
    <button
      class="md:hidden p-2 focus:outline-none transition-transform duration-300 flex justify-center"
      @click="isMenuOpen = !isMenuOpen"
    >
      <svg
        class="w-6 h-6 text-gray-700 transition-transform duration-300"
        :class="{ 'rotate-180 opacity-0': isMenuOpen }"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
      <svg
        class="w-6 h-6 text-gray-700 absolute transition-transform duration-300"
        :class="{
          'rotate-180 opacity-100': isMenuOpen,
          'opacity-0': !isMenuOpen,
        }"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>

    <!-- Desktop Navigation -->
    <nav class="hidden md:flex justify-around grow">
      <NuxtLink
        v-for="{ name, label } in pageLinks"
        :key="label"
        :to="{ name }"
        class="font-semibold text-gray-400 hover:text-gray-600 transition"
      >
        {{ label }}
      </NuxtLink>
    </nav>

    <!-- Mobile Navigation (Animated) -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-5"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-5"
    >
      <nav
        v-if="isMenuOpen"
        class="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden"
      >
        <NuxtLink
          v-for="{ name, label } in pageLinks"
          :key="label"
          :to="{ name }"
          class="font-semibold text-gray-600 hover:text-gray-900 transition"
          @click="isMenuOpen = false"
        >
          {{ label }}
        </NuxtLink>
        <NuxtLink
          class="px-3 font-semibold text-indigo-700"
          :to="{ name: 'auth-login' }"
        >
          Войти
        </NuxtLink>
      </nav>
    </transition>

    <NuxtLink
      class="hidden md:block px-3 font-semibold text-indigo-700"
      :to="{ name: 'auth-login' }"
    >
      Войти
    </NuxtLink>
  </header>
</div>
</template>

<script setup lang="ts">
import { ref } from "vue"

defineProps<{ activeLinkName: string }>()

const isMenuOpen = ref(false)

interface PageLink {
  label: string
  name: string
}

const pageLinks: PageLink[] = [
  { label: "Вакансии", name: "vacancies" },
  { label: "Мероприятия", name: "events" },
  { label: "Видео", name: "videos" },
  { label: "Организации", name: "organizations" },
  { label: "Сообщество", name: "community" },
]
</script>
