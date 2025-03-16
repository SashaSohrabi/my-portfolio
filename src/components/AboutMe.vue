<template>
  <section class="about-section" id="about">
    <BgVideo />
    <h2 class="about-section__title">{{ aboutContent?.title }}</h2>
    <div class="about-section__container">
      <div class="about-section__img-wrapper">
        <figure class="about-section__img-figure">
          <img :src="aboutContent.imageUrl" alt="Sasha's photo" class="about-section__img" />
          <figcaption class="about-section__caption">{{ aboutContent?.fullName }}</figcaption>
        </figure>
      </div>
      <p class="about-section__text">{{ aboutContent?.description }}</p>
      <div class="about-section__actions">
        <BaseButton :href="contentStore?.resumeUrl" target="_blank" class="about-section__button"
          >{{ aboutContent?.resumeButton?.text }}
          <font-awesome-icon icon="fa-solid fa-file-arrow-down"
        /></BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import BgVideo from '@/components/BgVideo.vue';
import BaseButton from '@/components/BaseButton.vue';
import { useContentStore } from '@/stores/contentStore';

const contentStore = useContentStore();
const aboutContent = computed(() => contentStore.content.about);
</script>

<style lang="scss" scoped>
.about-section {
  position: relative;
  padding: 6rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  text-align: center;

  @include respond-to('medium') {
    padding: 8rem;
  }

  &__container {
    width: 100%;
    margin: 3rem auto;
    box-shadow: 0 3rem 6rem rgba($black, 0.1);
    border-radius: 3px;
    background-color: rgba($white, 0.8);
    transform: skewX(0);
    padding: 4rem 4rem 4rem 6rem;
    text-align: initial;

    @include respond-to('large') {
      width: 85%;
      padding: 6rem;
      transform: skewX(-10deg);
      padding: 6rem 6rem 6rem 8rem;
    }
  }

  &__img-wrapper {
    position: relative;
    z-index: 1;
    width: 15rem;
    height: 15rem;
    float: left;
    transform: translateX(-3rem) skewX(0);
    position: relative;
    overflow: hidden;
    border-radius: 50%;

    @supports (clip-path: polygon(0 0)) or (-webkit-clip-path: polygon(0 0)) {
      -webkit-clip-path: circle(50% at 50% 50%);
      clip-path: circle(50% at 50% 50%);
      -webkit-shape-outside: circle(50% at 50% 50%);
      shape-outside: circle(50% at 50% 50%);
      border-radius: none;
    }

    @include respond-to('large') {
      transform: translateX(-4rem) skewX(10deg);
    }
  }

  &__caption {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 20%);
    color: $white;
    text-transform: uppercase;
    text-align: center;
    opacity: 0;
    transition: all 0.5s;
    backface-visibility: hidden;
  }

  &__img {
    transform: scale(1.1);
    transition: all 0.5s;
  }

  &__container:hover &__caption {
    opacity: 1;
    transform: translate(-50%, -50%);
  }

  &__container:hover &__img {
    transform: scale(1);
    filter: blur(3px) brightness(80%);
  }

  &__text {
    margin-bottom: 2rem;
    @include respond-to('large') {
      margin-bottom: 3rem;
    }
  }

  &__text,
  &__button {
    transform: skew(0);
    @include respond-to('large') {
      transform: skewX(10deg);
    }
  }

  &__actions {
    text-align: center;
    .fa-file-arrow-down {
      margin-left: 1.5rem;
    }
  }
}
</style>
