<template>
    <component :is="icon" :class="{ filled: filled }" />
</template>

<script lang="ts" setup>

interface MyIcon {
    icon?: Object
    name?: string
    filled?: boolean
}
const props = withDefaults(defineProps<MyIcon>(), {
    filled: false,
})
</script>

<style scoped>
.filled,
.filled:deep(*) {
    fill: currentColor;
}
</style>
