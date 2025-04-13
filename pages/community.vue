<template>
  <div class="flex flex-col gap-y-8">
    <section
      v-for="communityResourcesGroup in groupedCommunityResources"
      :key="communityResourcesGroup.id"
    >
      <h4 class="text-2xl font-bold mb-4">
        {{ communityResourcesGroup.name }}
      </h4>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        <a
          v-for="resource in communityResourcesGroup.communityResources"
          :key="resource.id"
          target="_blank"
          :href="resource.url"
        >
          <div
            class="py-4 px-6 text-lg font-normal text-white"
            :class="colorToBackgroundColorClass[resource.color]"
          >
            {{ resource.name }}
          </div>
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { fetchResources, groupedCommunityResources } = useCommunityResources()
await fetchResources()

const colorToBackgroundColorClass = {
  red: "bg-red-400",
  blue: "bg-blue-400 dark:bg-blue-600",
  green: "bg-emerald-400 dark:bg-emerald-500",
  "light-blue": "bg-sky-400 dark:bg-sky-500",
  violet: "bg-violet-400",
  contrast: "bg-gray-700 dark:bg-gray-600",
}
</script>
