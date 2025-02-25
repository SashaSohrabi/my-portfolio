<template>
  <main class="container">
    <MainBanner />
    <AboutMe />
  </main>
</template>

<script setup>
import MainBanner from '@/components/MainBanner.vue';
import AboutMe from '@/components/AboutMe.vue';
</script>

<style scoped>
.container {
  padding-top: 100px;
  min-height: calc(100vh - 200px); /* Adjust based on header/footer height */
}
</style>
