<template>
  <div class="see-more">
    <p class="see-more__text" ref="seeMoreTextRef" :style="seeMoreStyle">
      <span ref="truncatedTextRef">{{ truncatedText }}</span>
      <span v-if="shouldShowButton && !isExpanded">...</span>
      <Transition name="fade">
        <span v-if="isExpanded" class="see-more__rest">
          {{ restOfTheText }}
        </span>
      </Transition>
    </p>
    <span
      ref="scrollButtonRef"
      role="button"
      class="see-more__button"
      :aria-expanded="isExpanded.toString()"
      aria-controls="seeMoreContent"
      v-if="shouldShowButton"
      @click="toggleExpand"
    >
      {{ isExpanded ? lessText : moreText }}
      <font-awesome-icon :icon="chevronIcon" class="see-more__rotate-icon" />
    </span>
  </div>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue';
import { useDynamicCharacterLimit } from '@/composables/useDynamicCharacterLimit';

const props = defineProps({
  text: String,
  moreText: { type: String, default: 'Read More' },
  lessText: { type: String, default: 'Read Less' },
});

const isExpanded = ref(false);
const truncatedTextRef = ref(null);
const scrollButtonRef = ref(null);
const seeMoreTextRef = ref(null);

const chevronIcon = computed(() => ['fas', isExpanded.value ? 'chevron-up' : 'chevron-down']);

const { characterLimit, availableTextHeight } = useDynamicCharacterLimit(props.text);
const truncatedText = computed(() =>
  props.text?.length > characterLimit.value
    ? props.text.slice(0, characterLimit.value)
    : props.text,
);

const restOfTheText = computed(() =>
  props.text?.length > characterLimit.value ? props.text.slice(characterLimit.value) : '',
);

const shouldShowButton = computed(() => props.text?.length > characterLimit.value);

const seeMoreStyle = computed(() => ({
  maxHeight: `${availableTextHeight.value + 300}px`,
  overflowY: isExpanded.value ? 'scroll' : 'hidden',
}));

const toggleExpand = async () => {
  isExpanded.value = !isExpanded.value;

  await nextTick();

  if (isExpanded.value) {
    const textEl = seeMoreTextRef.value;
    if (textEl) {
      textEl.scrollTo({
        top: textEl.scrollHeight,
        behavior: 'smooth',
      });
    }
    scrollButtonRef.value?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  } else {
    truncatedTextRef.value?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
</script>

<style scoped lang="scss">
.see-more {
  margin-bottom: 2rem;

  @include respond-to('large') {
    display: none;
  }

  &__text {
    overflow: hidden;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__button {
    color: $picton-blue;
    font-size: 1.4rem;
  }
}

.fade-enter-active,
.fade-leave-active {
  @include transition(opacity);
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
