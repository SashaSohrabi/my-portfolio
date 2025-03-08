<template>
  <main class="portfolio" :style="backgroundStyle">
    <h1 class="portfolio__title">{{ portfolioContent.title }}</h1>
    <p class="portfolio__description">{{ portfolioContent.description }}</p>
    <portfolio-grid />
  </main>
</template>

<script setup>
import { computed } from 'vue';
import portfolioGrid from '@/components/PortfolioGrid.vue';
import { useMetaTags } from '@/composables/useMetaTags';
import { useContentStore } from '@/stores/contentStore';

const props = defineProps({
  routeName: String,
});

const contentStore = useContentStore();
const portfolioContent = computed(() => contentStore.content?.portfolio);

const backgroundStyle = computed(() => ({
  backgroundImage: portfolioContent.value?.backgroundImageUrl
    ? `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${portfolioContent.value.backgroundImageUrl})`
    : `linear-gradient(rgba(248, 248, 246, 0.8), rgba(248, 248, 246, 0.8))`,
}));

useMetaTags(props.routeName);
</script>

<style scoped lang="scss">
.portfolio {
  padding-top: 10rem;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  flex-direction: column;

  &__title {
    color: $picton-blue;
  }

  &__description {
    margin-bottom: 2rem;
  }
}
</style>
