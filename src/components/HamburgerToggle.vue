<template>
  <button
    type="button"
    class="toggle-button"
    aria-label="Toggle navigation menu"
    :class="{ 'toggle-button--active': modelValue }"
    @click="toggleMenu"
  >
    <span class="toggle-button__icon"></span>
  </button>
  <menu-overlay :showOverlay="modelValue" />
</template>

<script setup>
import menuOverlay from '@/components/MenuOverlay.vue';
const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);

const toggleMenu = () => emit('update:modelValue', !props.modelValue);
</script>

<style scoped lang="scss">
.toggle-button {
  border: none;
  position: fixed;
  top: 3rem;
  right: 3rem;
  background-color: $white;
  height: 7rem;
  width: 7rem;
  z-index: 4;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1rem 3rem;
  text-align: center;
  cursor: pointer;
  border-radius: 50%;

  &__icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &,
    &::before,
    &::after {
      width: 3rem;
      height: 2px;
      background-color: $mine-shaft;
      display: inline-block;
    }

    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 0;
      transition: all 0.2s;
    }

    &::before {
      top: -0.8rem;
    }
    &::after {
      top: 0.8rem;
    }
  }

  &:hover &__icon::before {
    top: -1rem;
  }

  &:hover &__icon::after {
    top: 1rem;
  }

  &--active &__icon {
    background-color: transparent;

    &::before,
    &::after {
      top: 0 !important;
    }

    &::before {
      transform: rotate(135deg);
    }

    &::after {
      transform: rotate(-135deg);
    }
  }

  @include respond-to('small') {
    top: 4rem;
    right: 4rem;
  }

  @include respond-to('medium') {
    display: none;
    & + .menu-overlay {
      display: none;
    }
  }
}
</style>
