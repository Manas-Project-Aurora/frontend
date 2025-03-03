<template>
    <OrganizationList :organizations="organizations"/>
</template>

<script setup lang="ts"> 
import OrganizationList from '~/components/OrganizationList.vue';

const organizations = [
  {
    id: 1,
    name: "The Palm",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTICCQFCvklT_5PBZ4QGaUfTmHLXjlcF81tlA&s", // Условный логотип
    vacanciesCount: 50,
    eventsCount: 1,
    videoCount: 0,
  },
  {
    id: 2,
    name: "Tech Corp",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTICCQFCvklT_5PBZ4QGaUfTmHLXjlcF81tlA&s",
    vacanciesCount: 12,
    eventsCount: 3,
    videoCount: 2,
  },
  {
    id: 3,
    name: "Innovate LLC",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTICCQFCvklT_5PBZ4QGaUfTmHLXjlcF81tlA&s",
    vacanciesCount: 7,
    eventsCount: 5,
    videoCount: 1,
  },
]
</script>