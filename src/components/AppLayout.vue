<template>
  <AppHeader :is-dark-header="isDarkHeader" />

  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" :route-name="route.name" />
    </transition>
  </router-view>

  <AppFooter />
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import AppHeader from './AppHeader.vue';
import AppFooter from './AppFooter.vue';

const route = useRoute();
const isDarkHeader = ref(false);

watch(
  route,
  (newRoute) => {
    isDarkHeader.value = ['ContactMe', 'Portfolio'].includes(newRoute.name);
  },
  { immediate: true },
);
</script>

<style scoped>
/* Smooth fade-in/out transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
