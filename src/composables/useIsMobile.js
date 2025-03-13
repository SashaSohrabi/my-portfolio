import { ref, watch, onMounted, onUnmounted } from 'vue';

export const useIsMobile = () => {
  const shouldUseCarousel = ref(false);

  const checkDevice = () => {
    const isTouchDevice = navigator.maxTouchPoints > 0; // Detects touchscreens
    const screenWidth = window.innerWidth;

    const isMedium = screenWidth < 768; // Matches `medium`

    shouldUseCarousel.value = isMedium && isTouchDevice;
  };

  watch(shouldUseCarousel, checkDevice, { immediate: true });

  onMounted(() => {
    window.addEventListener('resize', checkDevice);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', checkDevice);
  });

  return { shouldUseCarousel };
};
