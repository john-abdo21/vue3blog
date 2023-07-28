<script setup>
import { RouterView } from 'vue-router'
import { useGlobalHeadMeta } from './composables/useHead/useGlobalHeadMeta';
useGlobalHeadMeta('Abanoub - Portfolio Website',
  "Welcome to my portfolio website! I am a Software Engineer with experience in Front End ,Vue.js . Here you can find examples of my work and learn more about my background and qualifications.",
  "Abanoub, portfolio, Software Engineer,  Front End, Vue.js, Nuxt.js, Html5 , CSS3, Scss , Javacript, Js , Typescript"
)
</script>

<template>
  <ANav />

  <RouterView v-slot="{ Component, route }">
    <Transition name="fade" mode="out-in">
      <div :key="route.name">
        <component :is="Component" />
      </div>
    </Transition>
  </RouterView>
  <AFooter />
</template>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
