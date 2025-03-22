<template>
  <nav :class="['nav-menu', { 'nav-menu--mobile': isMobile, 'nav-menu--mobile-open': isMenuOpen }]">
    <RouterLink
      v-for="(link, index) in menuLinks"
      :key="index"
      :to="link.path"
      class="nav-menu__link"
      @click="isMobile && closeMenu()"
    >
      {{ link.name }}
    </RouterLink>
  </nav>
</template>

<script setup>
defineProps({
  menuLinks: Array,
  isMobile: Boolean,
  isMenuOpen: Boolean,
  closeMenu: Function,
});
</script>

<style scoped lang="scss">
.nav-menu {
  position: relative;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85%;

  &__link {
    text-decoration: none;
    color: $white;
    padding: 24px;

    &:hover {
      color: $picton-blue;
    }

    &.router-link-exact-active {
      color: $picton-blue;
    }
  }

  @include respond-to('large') {
    justify-content: right;
  }

  &--mobile {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: flex;
    opacity: 0;
    visibility: hidden;
    @include transition;

    &-open {
      opacity: 1;
      visibility: visible;

      @include respond-to('medium') {
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
      }
    }
  }
}
</style>
