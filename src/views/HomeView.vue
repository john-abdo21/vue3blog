<template>
  <!-- into section -->
  <div id="home"
    class="h-[50vh] lg:h-screen bg-gradient-to-t from-indigo-200 dark:from-slate-800 dark:to-slate-900 relative overflow-hidden">
    <!-- image -->
    <img class="absolute bottom-0 right-0 lg:left-0 mx-auto h-5/6 object-cover" src="@/assets/img/man2.png" alt="" />
    <!-- circle -->
    <div class="hidden lg:block absolute -bottom-1/4 right-0 left-0 mx-auto w-big h-big bg-indigo-900 rounded-full -z-10">
    </div>
    <!-- animated text -->
    <AbTypewriter />
    <!-- texts -->
    <AbTextModel />
  </div>
  <!-- About -->
  <AAbout />
  <!-- Services -->
  <!-- <AServices /> -->
  <!-- Skills -->
  <ASkills/>
  <!-- Works -->
  <AWorks />
  <!-- Contact -->
  <AContact />
</template>

<script setup>

</script>

<style lang="scss" scoped></style>