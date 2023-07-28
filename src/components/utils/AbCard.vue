<template>
    <template v-if="img">
        <a :href="link" target="_blank"
            class="w-full md:w-5/12 lg:w-1/5  mb-12 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
            <img :src="img" class="object-cover h-full" />
            <p class="dark:text-white text-center capitalize py-3">
                <slot name="content" />
            </p>
        </a>
    </template>
    <template v-else>
        <AbCardSkeleton v-for="item in 8" />
    </template>
</template>

<script setup>
const props = defineProps({
    link: {
        type: String,
        // default:''
    },
    img: {
        type: String,
        // default:''
    },
})

</script>

<style lang="scss" scoped></style>