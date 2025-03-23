<template>
  <div class="bg-video">
    <video class="bg-video__content" autoplay muted loop playsinline>
      <source :src="aboutContent.videoUrl.mp4" type="video/mp4" />
      <source :src="aboutContent.videoUrl.webm" type="video/webm" />
    </video>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useContentStore } from '@/stores/contentStore';

const contentStore = useContentStore();
const aboutContent = computed(() => contentStore.content.about);
</script>

<style scoped lang="scss">
.bg-video {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  opacity: 0.25;
  overflow: hidden;

  &__content {
    height: 100%;
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
  }
}
</style>
