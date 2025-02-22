<template>
  <header class="header">
    <div class="header__wrapper">
      <nav class="header__nav">
        <RouterLink
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
import { ref } from 'vue';

const menuLinks = ref([
  { name: 'Home', path: '/' },
  { name: 'About Me', path: '/about' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact Me', path: '/contact' },
]);
</script>

<style scoped lang="scss">
.header {
  background-color: rgba(0, 0, 0, 0.1);
  padding: 10px 0;
  border-width: 0 0 1px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: none;

  @include respond-to('medium') {
    display: block;
  }

  @include transition;

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
    width: 85%;

    @include respond-to('large') {
      justify-content: right;
    }

    &-link {
      text-decoration: none;
      padding: 30px 24px;
      font-size: 20px;
      font-weight: 300;
      color: $white-color;
      line-height: 20px;
      @include transition(color);

      &:hover {
        color: $link-color;
      }
    }
    .router-link-exact-active {
      color: $link-color;
    }
  }
}
</style>
