<template>
    <OrganizationList :organizations="organizations"/>
</template>

<script setup lang="ts"> 
import OrganizationList from '~/components/OrganizationList.vue';

const organizations = [
  {
    id: 1,
    name: "The Palm",
    logo: "icons/youtube.png", // Условный логотип
    vacanciesCount: 50,
    eventsCount: 1,
    videoCount: 0,
  },
  {
    id: 2,
    name: "Tech Corp",
    logo: "icons/youtube.png",
    vacanciesCount: 12,
    eventsCount: 3,
    videoCount: 2,
  },
  {
    id: 3,
    name: "Innovate LLC",
    logo: "icons/youtube.png",
    vacanciesCount: 7,
    eventsCount: 5,
    videoCount: 1,
  },
]
</script>