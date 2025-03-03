<template>
  <div>
    <section v-for="{ title, items, backgroundColor, icon } in itemsGroups" :key="title" class="mb-10">
      <h4 class="text-2xl mb-4 mt-8 font-semibold text-gray-400">
        {{ title }}
      </h4>
      <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
        <a v-for="item in items" :href="item.url" class="flex items-center bg-blue-500 text-white font-semibold rounded-md">
          <div class="flex justify-center">
            <img :src="icon" alt="Logo" class="w-12 h-12 rounded-l-md">
          </div>
          <div
            :class="backgroundColor"
            class="text-white font-semibold px-3 py-3 w-full"
          >
            {{ item.title }}
          </div>
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const iconSrc = "/icons/telegram.png";

interface CommunityLinkItem {
  title: string
  url: string
}

interface CommunityLinkItemGroup {
  title: string
  backgroundColor: string
  icon: string
  items: CommunityLinkItem[]
}

const itemsGroups: CommunityLinkItemGroup[] = [
  {
    title: "Наши ресурсы в Telegram",
    backgroundColor: "bg-blue-400",
    icon: "/icons/resources.png",
    items: [
      {
        title: "Общий чат",
        url: "https://t.me/ru_vuejs",
      },
      {
        title: "Общий чат",
        url: "https://t.me/ru_vuejs",
      },
      {
        title: "Общий чат",
        url: "https://t.me/ru_vuejs",
      },
      {
        title: "Общий чат",
        url: "https://t.me/ru_vuejs",
      },
      {
        title: "Общий чат",
        url: "https://t.me/ru_vuejs",
      },
      {
        title: "Общий чат",
        url: "https://t.me/ru_vuejs",
      },
      {
        title: "Общий чат",
        url: "https://t.me/ru_vuejs",
      },
      {
        title: "Общий чат",
        url: "https://t.me/ru_vuejs",
      },
    ],
  },
  {
    title: "Telegram чаты",
    backgroundColor: "bg-sky-300",
    icon: "/icons/telegram.png",
    items: [
      {
        title: "Общий чат",
        url: "https://t.me/ru_vuejs",
      },
      {
        title: "Общий чат",
        url: "https://t.me/ru_vuejs",
      },
      {
        title: "Общий чат",
        url: "https://t.me/ru_vuejs",
      },
      {
        title: "Общий чат",
        url: "https://t.me/ru_vuejs",
      },
      {
        title: "Общий чат",
        url: "https://t.me/ru_vuejs",
      },
      {
        title: "Общий чат",
        url: "https://t.me/ru_vuejs",
      },
      {
        title: "Общий чат",
        url: "https://t.me/ru_vuejs",
      },
      {
        title: "Общий чат",
        url: "https://t.me/ru_vuejs",
      },
    ],
  },
  {
    title: "Веб сайты",
    backgroundColor: "bg-green-300",
    icon: "/icons/internet.png",
    items: [
      {
        title: "Общий чат",
        url: "https://t.me/ru_vuejs",
      },
      {
        title: "Общий чат",
        url: "https://t.me/ru_vuejs",
      },
      {
        title: "Общий чат",
        url: "https://t.me/ru_vuejs",
      },
      {
        title: "Общий чат",
        url: "https://t.me/ru_vuejs",
      },
      {
        title: "Общий чат",
        url: "https://t.me/ru_vuejs",
      },
      {
        title: "Общий чат",
        url: "https://t.me/ru_vuejs",
      },
      {
        title: "Общий чат",
        url: "https://t.me/ru_vuejs",
      },
      {
        title: "Общий чат",
        url: "https://t.me/ru_vuejs",
      },
    ],
  },
  {
    title: "YouTube",
    backgroundColor: "bg-red-400",
    icon: "/icons/youtube.png",
    items: [
      {
        title: "Общий чат",
        url: "https://t.me/ru_vuejs",
      },
      {
        title: "Общий чат",
        url: "https://t.me/ru_vuejs",
      },
      {
        title: "Общий чат",
        url: "https://t.me/ru_vuejs",
      },
      {
        title: "Общий чат",
        url: "https://t.me/ru_vuejs",
      },
      {
        title: "Общий чат",
        url: "https://t.me/ru_vuejs",
      },
      {
        title: "Общий чат",
        url: "https://t.me/ru_vuejs",
      },
      {
        title: "Общий чат",
        url: "https://t.me/ru_vuejs",
      },
      {
        title: "Общий чат",
        url: "https://t.me/ru_vuejs",
      },
    ],
  },
]
</script>