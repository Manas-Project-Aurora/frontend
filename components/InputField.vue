<template>
    <div>
        <label :for="id" class="block text-sm font-medium text-gray-700">{{ label }}</label>
        <input 
            :id="id"
            :type="type"
            v-model="value"
            class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
        >
        <p v-if="error" class="mt-1 text-sm text-red-500">{{ error }}</p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    id: string,
    label: string,
    type: string,
    error?: string,
}>();

const value = defineModel<string>();
</script>
