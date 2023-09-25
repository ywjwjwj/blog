<template>
    <div class="flex items-center gap-0.5">
        <Kbd size="md">⌘</Kbd>
        <Icon name="i-heroicons-light-bulb" />
        <Badge color="violet" variant="solid" >nice</Badge>
    </div>
    <div class="p-6 border bg-white dark:bg-black dark:border-gray-700 rounded flex flex-row">
        <Badge>QQQQQ</Badge>

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