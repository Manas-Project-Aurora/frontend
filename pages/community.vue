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
    title: "Телебаза: чат, где код превращается в ахахахах",
    backgroundColor: "bg-blue-400",
    icon: "/icons/resources.png",
    items: [
      {
        title: "Vue, где мои права?",
        url: "https://t.me/ru_vuejs",
      },
      {
        title: "Кодим через боль",
        url: "https://t.me/ru_vuejs",
      },
      {
        title: "Сломал? Да кто бы сомневался!",
        url: "https://t.me/ru_vuejs",
      },
      {
        title: "Ты это деплоил?",
        url: "https://t.me/ru_vuejs",
      },
      {
        title: "Vue, **банька** и паника",
        url: "https://t.me/ru_vuejs",
      },
      {
        title: "JS без боли (ну почти)",
        url: "https://t.me/ru_vuejs",
      },
      {
        title: "Кодовые запойчики",
        url: "https://t.me/ru_vuejs",
      },
      {
        title: "Где мои `;`, **сука**?",
        url: "https://t.me/ru_vuejs",
      },
    ],
  },
  {
    title: "Чатостроение и Vue-страдания",
    backgroundColor: "bg-sky-300",
    icon: "/icons/telegram.png",
    items: [
      {
        title: "Где баги, там и мы, бл**ть",
        url: "https://t.me/ru_vuejs",
      },
      {
        title: "Vue, баги и отчаяние",
        url: "https://t.me/ru_vuejs",
      },
      {
        title: "TypeScript? Нет, спасибо",
        url: "https://t.me/ru_vuejs",
      },
      {
        title: "Чатик, где все ноют",
        url: "https://t.me/ru_vuejs",
      },
      {
        title: "Вопрос-ответ-паника",
        url: "https://t.me/ru_vuejs",
      },
      {
        title: "Кофе, код и лютый **п***ец",
        url: "https://t.me/ru_vuejs",
      },
      {
        title: "Вечерний кодинг и алкостек",
        url: "https://t.me/ru_vuejs",
      },
      {
        title: "1001 способ убить Vue",
        url: "https://t.me/ru_vuejs",
      },
    ],
  },
  {
    title: "Интернет! Интернет! Где мой sanity check?!",
    backgroundColor: "bg-green-300",
    icon: "/icons/internet.png",
    items: [
      {
        title: "Главный сайт, но он падает",
        url: "https://t.me/ru_vuejs",
      },
      {
        title: "npm-пакет, которого нет",
        url: "https://t.me/ru_vuejs",
      },
      {
        title: "HTML, CSS и WTF",
        url: "https://t.me/ru_vuejs",
      },
      {
        title: "Веб катится в ж*пу",
        url: "https://t.me/ru_vuejs",
      },
      {
        title: "Кроссбраузерные страдания",
        url: "https://t.me/ru_vuejs",
      },
      {
        title: "SEO, но не через задницу",
        url: "https://t.me/ru_vuejs",
      },
      {
        title: "Fullstack: мы все тут страдаем",
        url: "https://t.me/ru_vuejs",
      },
      {
        title: "Web 3.0 – развод века?",
        url: "https://t.me/ru_vuejs",
      },
    ],
  },
  {
    title: "VueTube: баги, паника, алкостримы",
    backgroundColor: "bg-red-400",
    icon: "/icons/youtube.png",
    items: [
      {
        title: "Баги в прямом эфире, ахахах",
        url: "https://t.me/ru_vuejs",
      },
      {
        title: "Как не заснуть на **ебинаре**",
        url: "https://t.me/ru_vuejs",
      },
      {
        title: "Разбор кода (и психики)",
        url: "https://t.me/ru_vuejs",
      },
      {
        title: "JS-треш на стримах (цензура?)",
        url: "https://t.me/ru_vuejs",
      },
      {
        title: "Дебаг в 4K, но боль в 8K",
        url: "https://t.me/ru_vuejs",
      },
      {
        title: "Vue: разбор полетов без парашюта",
        url: "https://t.me/ru_vuejs",
      },
      {
        title: "Frontend-кулинария: рецепт боли",
        url: "https://t.me/ru_vuejs",
      },
      {
        title: "Ютубчек для тех, кто не пишет тесты",
        url: "https://t.me/ru_vuejs",
      },
    ],
  },
];


</script>
