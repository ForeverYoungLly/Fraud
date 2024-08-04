<template>
    <div class="my-2">
        <span class="bg-gray-700 text-sm rounded-md px-2 py-1 text-gray-200 font-bold">
            {{ label }}
        </span>
        <span class="text-sm m-2">{{ value }}</span>
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
