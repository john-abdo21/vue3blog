<template>
    <div id="hamburger" class=" nav__hamburger " @click="toggleMenu()">

        <template v-if="!openMenu">
            <div class="w-6 h-0.5 bg-black dark:hamburger-dots"></div>
            <div class="w-6 h-0.5 bg-black dark:hamburger-dots"></div>
            <div class="w-6 h-0.5 bg-black dark:hamburger-dots"></div>
        </template>
        <template v-else>
            <div class="w-6 h-0.5 transform rotate-45 bg-white"></div>
            <div class="w-6 h-0.5 transform rotate-[130deg] translate-y-[-6px] bg-white"></div>
        </template>

    </div>
    <ul id="menu" :class="openMenu ? '' : 'hidden'"
        class=" bg-indigo-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center">
        <li>
            <a @click="closeMenu()" v-smooth-scroll href="#home">Home</a>
        </li>
        <li>
            <a @click="closeMenu()" v-smooth-scroll href="#about">About me</a>
        </li>
        <!-- <li>
            <a @click="closeMenu()" v-smooth-scroll href="#services">Services</a>
        </li> -->
        <li>
            <a @click="closeMenu()" v-smooth-scroll href="#skills">Skills</a>
        </li>
        <li>
            <a @click="closeMenu()" v-smooth-scroll href="#works">Works</a>
        </li>
        <li>
            <a @click="closeMenu()" v-smooth-scroll href="#contact">Contact</a>
        </li>

    </ul>
</template>

<script setup>
import { ref } from 'vue'
const openMenu = ref(false)
const toggleMenu = () => {
    openMenu.value = !openMenu.value
}
const closeMenu = () => {
    openMenu.value  = false
}

</script>

<style lang="scss" scoped></style>