<template>
  <router-view />
</template>

<script setup>
import { onMounted } from 'vue';
import { useContentStore } from '@/stores/contentStore';

const contentStore = useContentStore();

onMounted(async () => {
  if (!Object.keys(contentStore.content).length) {
    await contentStore.fetchContent();
  }
});
</script>
