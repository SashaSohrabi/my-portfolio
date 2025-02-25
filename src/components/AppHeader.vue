<template>
  <Teleport to="body">
    <HamburgerToggle v-model="isMenuOpen" />
  </Teleport>

  <header
    class="header"
    :class="{
      'header--menu-open': isMenuOpen && !isAnimating,
      'header--menu-closing': isAnimating,
    }"
    ref="header"
  >
    <div class="header__wrapper">
      <nav class="header__nav">
        <RouterLink
          @click="isMenuOpen = false"
          v-for="(link, index) in menuLinks"
          :key="index"
          :to="link.path"
          class="header__nav-link"
        >
          {{ link.name }}
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted, useTemplateRef } from 'vue';
import HamburgerToggle from '@/components/HamburgerToggle.vue';

const headerRef = useTemplateRef('header');
const isMenuOpen = ref(false);
const isAnimating = ref(false); //Track closing animation

const menuLinks = ref([
  { name: 'Home', path: '/' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact Me', path: '/contact' },
]);

watch(isMenuOpen, (newVal, oldVal) => {
  if (!newVal && oldVal) {
    isAnimating.value = true;
    setTimeout(() => {
      isAnimating.value = false;
    }, 500);
  }
});

const handleScroll = () => {
  if (window.scrollY > 0 && window.innerWidth > 767) {
    headerRef.value?.classList.add('fixed-header');
  } else {
    headerRef.value?.classList.remove('fixed-header');
  }
};

onMounted(() => {
  document.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  document.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  z-index: 3;
  visibility: hidden;
  opacity: 0;
  background-color: transparent;
  top: 50%;
  left: 50%;

  @include respond-to('medium') {
    background-color: $header-bg-color;
    padding: 10px 0;
    border-width: 0 0 1px;
    top: 0;
    left: 0;
    right: 0;
    transform: translate(0, 0);
    opacity: 1;
    visibility: visible;
    transition: none;
  }

  &__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }

  &__nav {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;

    &-link {
      text-decoration: none;
      padding: 30px 24px;
      font-size: 20px;
      font-weight: 300;
      color: $white-color;
      line-height: 20px;
      text-transform: capitalize;

      @include transition;

      &:hover {
        color: $link-color;
      }
    }
    .router-link-exact-active {
      color: $link-color;
    }

    @include respond-to('medium') {
      width: 85%;
      flex-direction: row;
    }

    @include respond-to('large') {
      justify-content: right;
    }
  }

  &.fixed-header {
    background-color: rgba(0, 0, 0, 0.95);
    padding: 5px 0;

    .header__nav-link {
      font-size: 18px;
      text-transform: uppercase;

      @include respond-to('medium') {
        text-transform: capitalize;
      }
    }
  }

  &.header--menu-open {
    visibility: visible;
    pointer-events: all;
    animation: menuOpen 0.5s forwards;
  }

  &.header--menu-closing {
    visibility: visible;
    pointer-events: none;
    animation: menuClose 0.5s forwards;
  }
}
</style>
