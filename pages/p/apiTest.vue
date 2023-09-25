<template>
    <div class="p-6 border bg-white dark:bg-black dark:border-gray-700 rounded flex flex-row">
        <UKbd>Api Test</UKbd>
    </div>
</template>

<script setup>
const linkTo = async (path) => {
    navigateTo({
        path: path,
        query: {
        }
    })
}
</script>