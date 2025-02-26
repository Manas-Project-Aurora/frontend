<template>
  <div>
    <section v-for="{ title, items, backgroundColor } in itemsGroups" :key="title" class="mb-10">
      <h4 class="text-2xl mb-4 mt-8 font-semibold text-gray-400">
        {{ title }}
      </h4>
      <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
        <a v-for="item in items" :href="item.url">
          <div
            :class="backgroundColor"
            class="text-white font-semibold px-3 py-4"
          >
            {{ item.title }}
          </div>
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
interface CommunityLinkItem {
  title: string
  url: string
}

interface CommunityLinkItemGroup {
  title: string
  backgroundColor: string
  items: CommunityLinkItem[]
}

const itemsGroups: CommunityLinkItemGroup[] = [
  {
    title: "Наши ресурсы в Telegram",
    backgroundColor: "bg-blue-400",
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
