<template>
  <PagePreloader v-if="isLoading" />
  <router-view v-else />
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useContentStore } from '@/stores/contentStore';
import PagePreloader from '@/components/PagePreloader.vue';

const contentStore = useContentStore();
const isLoading = ref(true);

onMounted(async () => {
  if (!Object.keys(contentStore.content).length) {
    await contentStore.fetchContent();
  }

  isLoading.value = false;
});
</script>
