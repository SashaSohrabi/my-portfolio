<template>
  <section
    class="banner"
    :style="{ backgroundImage: `url(${content?.banner?.backgroundImageUrl})` }"
  >
    <div class="banner__caption">
      <div class="banner__caption-wrapper">
        <h1 class="banner__caption-title">
          {{ content?.banner?.title }}
        </h1>
        <p class="banner__caption-description">{{ content?.banner?.description }}</p>
      </div>
    </div>
    <ChevronScroll targetId="about">{{ content?.about?.title }}</ChevronScroll>
  </section>
</template>

<script setup>
import ChevronScroll from '@/components/ChevronScroll.vue';
import { computed } from 'vue';
import { useContentStore } from '@/stores/contentStore';

const contentStore = useContentStore();
const content = computed(() => contentStore?.content);
</script>

<style scoped lang="scss">
.banner {
  width: 100vw;
  height: 100vh;
  margin-top: -100px;
  position: relative;
  color: $white;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.72);
    content: '';
  }

  &__caption {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: inline-block;
    width: 66.66666667%;
    z-index: 1;
    text-align: center;

    &-title {
      line-height: 1.2;
      color: $picton-blue;
    }

    &-description {
      font-size: 2rem;
      color: $white;
    }
  }
}
.animate__animated {
  --animate-delay: 2s;
}
</style>
