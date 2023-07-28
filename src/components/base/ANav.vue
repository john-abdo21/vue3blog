<template>
    <nav class="nav">
        <div class="nav__container">
            <div class="flex items-center gap-1 px-1">
                <img class="w-8 rounded-lg" src="@/assets/img/profile.png" alt="logo" />
                <span class="text-2xl font-bold text-indigo-900 dark:text-white">Banoub.</span>
            </div>
            <ul class="nav__main-menu ">
                <li class="nav__main-menu__link ">
                    <a v-smooth-scroll href="#home">Home</a>
                </li>
                <li class="nav__main-menu__link">
                    <a v-smooth-scroll href="#about">about me</a>
                </li>
                <!-- <li class="nav__main-menu__link">
                    <a v-smooth-scroll href="#services">services</a>
                </li> -->
                <li class="nav__main-menu__link">
                    <a v-smooth-scroll href="#skills">Skills</a>
                </li>
                <li class="nav__main-menu__link">
                    <a v-smooth-scroll href="#works">works</a>
                </li>
                <li class="nav__main-menu__link">
                    <a v-smooth-scroll href="#contact">contact</a>
                </li>
            </ul>
            <div class="flex items-center justify-center gap-5">
                <!-- Dark Mode -->
                <AbDarkMode />
                <!-- Hamburger Menu -->
                <AbHamburger />
            </div>
        </div>
    </nav>
</template>
  
<script setup>


</script>
  
<style lang="scss" scoped></style>