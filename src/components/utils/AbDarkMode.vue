<template>
    <img id="moon" src="@/assets/img/moon.png" class="nav__theme" alt="theme" @click="toggleDark()" />
</template>

<script setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

</script>

<style lang="scss" scoped></style>