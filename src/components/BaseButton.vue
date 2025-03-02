<template>
  <component
    :is="tag"
    :href="href"
    v-bind="buttonAttributes"
    class="base-button"
    :class="buttonClasses"
    @click="handleClick"
  >
    <slot></slot>
  </component>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  href: { type: String },
  target: { type: String },
  type: { type: String },
  variant: { type: String, default: 'primary' },
});

const emit = defineEmits(['click']);

const tag = computed(() => (props.href ? 'a' : 'button'));
const buttonAttributes = computed(() => {
  if (props.href) {
    return { role: 'button', target: props.target };
  }
  return { type: props.type || 'button' };
});

const handleClick = (event) => {
  if (!props.href) {
    emit('click', event);
  }
};

const buttonClasses = computed(() => [`base-button--${props.variant}`]);
</script>

<style scoped lang="scss">
.base-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  font-weight: 400;
  font-size: 1.6rem;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid transparent;
  box-shadow: 0 1rem 2rem rgba($black, 0.2);
  @include transition;

  &--primary {
    background-color: $picton-blue;
    color: $white;
    border-color: $picton-blue;

    &:hover {
      box-shadow: 0 0.5rem 1rem rgba($black, 0.2);
      background-color: darken($picton-blue, 5%);
    }
  }

  &--secondary {
    background-color: transparent;
    color: $picton-blue;
    border-color: $picton-blue;

    &:hover {
      background-color: rgba($picton-blue, 0.1);
    }
  }
}
</style>
