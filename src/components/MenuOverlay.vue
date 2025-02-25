<template>
  <div class="menu-overlay" :class="{ 'menu-overlay--scaled': showOverlay }">&nbsp;</div>
</template>

<script setup>
defineProps({
  showOverlay: {
    type: Boolean,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.menu-overlay {
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  position: fixed;
  top: 3.5rem;
  right: 3.5rem;
  background-image: radial-gradient(
    rgba($overlay-bg-color, 0.9),
    rgba(lighten($overlay-bg-color, 20%), 0.9)
  );
  z-index: 2;
  transition: transform 0.5s cubic-bezier(0.86, 0, 0.07, 1);

  &.menu-overlay--scaled {
    transform: scale(80);
  }

  @include respond-to('small') {
    top: 4.5rem;
    right: 4.5rem;
  }
}
</style>
