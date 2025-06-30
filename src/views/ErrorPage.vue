<template>
  <div class="full-page-gif">
    <img src="/images/404-error-page.gif" alt="Loading..." />
  </div>
</template>

<script setup>
import { watchEffect, computed } from 'vue';
import { useContentStore } from '@/stores/contentStore';
import { useRouter } from 'vue-router';

const router = useRouter();
const contentStore = useContentStore();
const hasError = computed(() => !!contentStore.error);

watchEffect(() => {
  if (!hasError.value) {
    router.push('/');
  }
});

</script>

<style scoped lang="scss">
.full-page-gif {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $black;
  z-index: 5;
}

.full-page-gif img {
  max-width: 90%;
  max-height: 90%;
}
</style>
