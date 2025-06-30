<template>
  <div class="project-card">
    <div class="project-card__side project-card__side--front">
      <div class="project-card__picture" :style="backgroundStyle">&nbsp;</div>
      <h4 class="project-card__heading">
        <span class="project-card__heading-span">{{ props.title }}</span>
      </h4>
    </div>
    <div class="project-card__side project-card__side--back">
      <div class="project-card__details">
        <h5>Technologies used:</h5>
        <ul>
          <li v-for="(technology, index) in technologies" :key="index">{{ technology }}</li>
        </ul>
      </div>
      <div class="project-card__cta">
        <BaseButton :href="props.sourceCode" target="_blank"
          >Source Code <font-awesome-icon icon="fa-solid fa-terminal" />
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import BaseButton from '@/components/BaseButton.vue';

const props = defineProps({
  id: String,
  title: String,
  imageUrl: String,
  technologies: Array,
  sourceCode: String,
  description: String,
});

const backgroundStyle = computed(() => ({
  backgroundImage: `linear-gradient(to right bottom, rgb(0, 0, 0), rgba(255, 255, 255)), url(${props.imageUrl})`,
  backgroundSize: 'cover',
  backgroundPosition: 'bottom left',
  backgroundRepeat: 'no-repeat',
}));
</script>

<style scoped lang="scss">
.project-card {
  perspective: 150rem;
  -moz-perspective: 150rem;
  position: relative;
  min-width: 28rem;
  height: 40rem;

  &__side {
    height: 40rem;
    transition: all 0.8s ease;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    backface-visibility: hidden;
    will-change: transform;
    border-radius: 3px;
    overflow: hidden;
    box-shadow: 0 1.5rem 4rem rgba($black, 0.15);

    &--front {
      background-color: $white;
      z-index: 1;
    }

    &--back {
      position: relative;
      padding: 3rem;
      color: $white;
      background-image: linear-gradient(to right bottom, $picton-blue, lighten($picton-blue, 30%));
      transform: rotateY(180deg);
      overflow-y: auto;
    }
  }

  &:hover &__side--front {
    transform: rotateY(-180deg);
  }

  &:hover &__side--back {
    transform: rotateY(0);
  }

  &__picture {
    height: 25rem;
    background-blend-mode: soft-light;
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }

  &__heading {
    font-size: 2.8rem;
    font-weight: 300;
    text-transform: uppercase;
    text-align: right;
    color: $picton-blue;
    position: absolute;
    bottom: 3rem;
    right: 3rem;
    width: 55%;
  }

  &__heading-span {
    padding: 1rem 1.5rem;
    box-decoration-break: clone;
  }

  &__details {
    margin-bottom: 3rem;
    ul {
      list-style: none;
      width: 80%;
      margin: 0 auto;

      li {
        text-align: center;
        font-size: 1.5rem;
        padding: 1rem;

        &:not(:last-child) {
          border-bottom: 1px solid $concrete;
        }
      }
    }
  }

  &__cta {
    text-align: center;
    .fa-terminal {
      margin-left: 1.5rem;
    }
  }

  &__price-box {
    text-align: center;
    color: $white;
    margin-bottom: 8rem;
  }

  &__price-only {
    font-size: 1.4rem;
    text-transform: uppercase;
  }

  &__price-value {
    font-size: 6rem;
    font-weight: 100;
  }

  @include respond-to('medium') {
    min-width: 100%;
  }
}
</style>
