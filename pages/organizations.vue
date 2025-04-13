<template>
    <OrganizationList :organizations="organizations"/>
</template>

<script setup lang="ts"> 
import OrganizationList from '~/components/OrganizationList.vue';

const organizations = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `Company ${i + 1}`,
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTICCQFCvklT_5PBZ4QGaUfTmHLXjlcF81tlA&s",
  vacanciesCount: Math.floor(Math.random() * 100),
  eventsCount: Math.floor(Math.random() * 10),
  videoCount: Math.floor(Math.random() * 5),
}));
</script>