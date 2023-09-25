<script setup>
const router = useRouter()
const content = useContent()
const props = defineProps({
    title: {
        type: String,
        default: 'Default title'
    },
    description: {
        type: String,
        default: 'Default description'
    },
    icon: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        default: ''
    },
    imageClass: {
        type: String,
        default: ''
    },
    imageWidth: {
        type: Number,
        default: 85
    },
    href: {
        type: String,
        default: ''
    },
    showImg: {
        type: Boolean,
        default: false
    }
})

const linkTo = async () => {
    navigateTo({
        path: props.href,
        query: {
        }
    })
}

</script>

<template>
    <div :onClick="linkTo" class="p-6 border bg-white dark:bg-black dark:border-gray-700 rounded flex flex-row">
        <div>
            <!-- <component :is="icon" class="w-20 h-20" /> -->
            <Icon :name="icon" class="w-20 h-20" v-if="icon" />
            <h2 class="text-3xl font-semibold mb-2">
                {{ title }}
            </h2>
            <p>{{ description }}</p>
        </div>
        
        <nuxt-img :class="imageClass" :width="imageWidth" :src="image" v-if="image != image.default"></nuxt-img>
    </div>
</template>