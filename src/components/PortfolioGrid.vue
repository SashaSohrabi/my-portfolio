<template>
  <section class="portfolio-grid">
    <!-- Show Carousel on Mobile -->
    <Carousel v-if="isCompactTouchScreen" :items-to-show="1" :wrap-around="true">
      <Slide v-for="project in projects" :key="project.id">
        <ProjectCard v-bind="project" />
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>

    <!-- Show Grid on Desktop -->
    <template v-else>
      <ProjectCard v-for="project in projects" :key="project.id" v-bind="project"></ProjectCard>
    </template>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useContentStore } from '@/stores/contentStore';
import { useScreenSize } from '@/composables/useScreenSize';
import ProjectCard from '@/components/ProjectCard.vue';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

const contentStore = useContentStore();
const projects = computed(() => contentStore.content.projects);

const { isCompactTouchScreen } = useScreenSize();
</script>

<style scoped lang="scss">
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
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
