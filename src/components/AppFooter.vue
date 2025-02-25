<template>
  <footer>
    <div class="footer">
      <p class="footer__content">{{ footerContent?.text }}</p>
    </div>
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
  background-color: $footer-bg-color;
  border-top: 1px solid $footer-border-color;
  border-bottom: 1px solid $footer-border-color;
  padding: 40px 0;

  &__content {
    margin: 0;
    text-align: center;
  }
}
</style>
