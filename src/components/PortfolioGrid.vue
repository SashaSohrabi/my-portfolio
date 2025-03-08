<template>
  <section class="portfolio-grid">
    <ProjectCard v-for="project in projects" :key="project.id" v-bind="project"></ProjectCard>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useContentStore } from '@/stores/contentStore';
import ProjectCard from '@/components/ProjectCard.vue';

const contentStore = useContentStore();
const projects = computed(() => contentStore.content.projects);
</script>

<style scoped lang="scss">
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  padding: 3rem;

  @include respond-to('small') {
    width: 60%;
  }

  @include respond-to('medium') {
    width: 100%;
  }
}
</style>
