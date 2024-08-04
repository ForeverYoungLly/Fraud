<template>
    <div class="flex flex-row gap-2 items-center">
        <span class="bg-gray-700 text-sm rounded-md px-2 py-1 text-gray-200 font-bold my-1">
            {{ label }}
        </span>
        <p class="text-sm">{{ value }}</p>
    </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
    label: {
        type: String,
        required: true,
    },
    value: {
        type: String,
        required: true,
    },
});
</script>
