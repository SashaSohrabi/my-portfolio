<template>
  <div class="portfolio">
    <h1>This is a portfolio page</h1>
    <portfolio-grid />
  </div>
</template>

<script setup>
import portfolioGrid from '@/components/PortfolioGrid.vue';
import { useMetaTags } from '@/composables/useMetaTags';

const props = defineProps({
  routeName: String,
});

useMetaTags(props.routeName);
</script>

<style scoped>
.portfolio {
  padding-top: 100px;
  min-height: 100vh;
}
</style>
