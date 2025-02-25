<template>
  <main class="container">
    <MainBanner :title="bannerContent.title" :description="bannerContent.description" />
    <AboutMe />
  </main>
</template>

<script setup>
import { ref } from 'vue';
import MainBanner from '@/components/MainBanner.vue';
import AboutMe from '@/components/AboutMe.vue';

const bannerContent = ref({
  title: 'Front-End Web Developer',
  description: 'with a passion for learning',
});
</script>

<style scoped>
.container {
  padding-top: 100px;
  min-height: calc(100vh - 200px); /* Adjust based on header/footer height */
}
</style>
