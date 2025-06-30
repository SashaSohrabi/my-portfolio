<template>
  <PagePreloader v-if="isLoading" />
  <router-view v-else />
</template>

<script setup>
import { onMounted, ref, computed, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import { useContentStore } from '@/stores/contentStore';
import PagePreloader from '@/components/PagePreloader.vue';

const contentStore = useContentStore();
const router = useRouter();
const isLoading = ref(true);

const hasError = computed(() => !!contentStore.error);

onMounted(async () => {
  if (!Object.keys(contentStore.content).length) {
    await contentStore.fetchData();
  }

  isLoading.value = false;
});

watchEffect(() => {
  if (hasError.value) {
    router.push({ path: '/error', query: { hasError: 'true' } });
  }
});
</script>
