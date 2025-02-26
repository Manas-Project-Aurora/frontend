<template>
  <div class="flex flex-col">
    <p class="text-gray-400 font-medium">{{ title }}</p>
    <p class="text-stone-800 font-medium">
      {{ content }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string; content: string }>();
</script>
