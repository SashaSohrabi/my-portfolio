import { ref, watchEffect, computed } from 'vue';
import { useScreenSize } from '@/composables/useScreenSize';

export const useDynamicCharacterLimit = (text) => {
  const { screenHeight } = useScreenSize();

  // On small screens, 1rem ≈ 10px, so 1.6rem (default line-height) ≈ 16px
  const TEXT_HEIGHT_RATIO = 0.4;
  const PADDING_PX = 120;
  const LINE_HEIGHT = 16;
  const AVG_CHARS_PER_LINE = 60;

  const availableTextHeight = computed(() => TEXT_HEIGHT_RATIO * screenHeight.value - PADDING_PX);

  const maxLines = computed(() => Math.floor(availableTextHeight.value / LINE_HEIGHT));

  const characterLimit = ref(150);

  watchEffect(() => {
    if (text.length > 0) {
      const totalLines = Math.ceil(text.length / AVG_CHARS_PER_LINE);
      characterLimit.value = Math.floor((text.length / totalLines) * maxLines.value);
    }
  });

  return { characterLimit, availableTextHeight };
};
