<template>
  <footer class="footer">
    <p class="footer__content">{{ footerContent?.text }}</p>
  </footer>
</template>

<script setup>
import { computed } from 'vue';
import { useContentStore } from '@/stores/contentStore';

const contentStore = useContentStore();
const footerContent = computed(() => contentStore.content.footer);
</script>

<style lang="scss">
.footer {
  background-color: $alabaster;
  border-top: 1px solid $concrete;
  border-bottom: 1px solid $concrete;
  padding: 3rem 0;

  &__content {
    margin: 0;
    text-align: center;
  }
}
</style>
