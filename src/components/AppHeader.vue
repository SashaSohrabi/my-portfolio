<template>
  <Teleport to="body">
    <HamburgerToggle v-model="isMenuOpen" />
    <NavMenu
      :menuLinks="menuLinks"
      :isMobile="true"
      :closeMenu="closeMobileMenu"
      :isMenuOpen="isMenuOpen"
    />
  </Teleport>

  <header class="header" ref="header">
    <div class="header__wrapper">
      <NavMenu :menuLinks="menuLinks" :isMobile="false" />
    </div>
  </header>
</template>

<script setup>
import { ref, computed, watchEffect, onMounted, onUnmounted, useTemplateRef } from 'vue';
import { throttle, debounce } from 'lodash';
import { useContentStore } from '@/stores/contentStore';
import HamburgerToggle from '@/components/HamburgerToggle.vue';
import NavMenu from '@/components/NavMenu.vue';

const headerRef = useTemplateRef('header');
const isMenuOpen = ref(false);

const contentStore = useContentStore();
const menuLinks = computed(() => contentStore.content.menuLinks);
const shouldFix = () => window.scrollY > 0 && window.innerWidth > 767;

watchEffect(() => {
  // Disable scrolling when menu is open
  document.body.classList.toggle('no-scroll', isMenuOpen.value);
});

const closeMobileMenu = () => {
  isMenuOpen.value = false;
};

const handleScroll = throttle(() => {
  headerRef.value?.classList.toggle('fixed-header', shouldFix());
});

const handleResize = debounce(() => {
  const { innerWidth } = window;

  if (innerWidth >= 768) isMenuOpen.value = false;
  headerRef.value?.classList.toggle('fixed-header', shouldFix());
});

onMounted(() => {
  document.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  document.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  z-index: 3;
  background-color: transparent;
  top: 50%;
  left: 50%;
  display: none;
  @include transition;

  @include respond-to('medium') {
    background-color: $header-bg-color;
    padding: 0.8rem 0;
    border-width: 0 0 1px;
    top: 0;
    left: 0;
    right: 0;
    transform: translate(0, 0);
    display: block;
  }

  &__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }

  &.fixed-header {
    background-color: rgba(0, 0, 0, 0.8);
    padding: 0;

    .header__nav-link {
      text-transform: uppercase;

      @include respond-to('medium') {
        text-transform: capitalize;
      }
    }
  }
}
</style>
