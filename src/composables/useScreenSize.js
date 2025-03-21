import { ref, watchEffect, onMounted, onUnmounted } from 'vue';

export const useScreenSize = () => {
  const isCompactTouchScreen = ref(false);
  const screenHeight = ref(window.innerHeight);
  const screenWidth = ref(window.innerWidth);

  const checkDevice = () => {
    screenWidth.value = window.innerWidth;
    screenHeight.value = window.innerHeight;

    const isTouchDevice = () => {
      return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches
      );
    };

    const isMedium = screenWidth.value < 768; // Matches `medium`

    isCompactTouchScreen.value = isMedium && isTouchDevice;
  };

  onMounted(() => {
    window.addEventListener('resize', checkDevice);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', checkDevice);
  });

  watchEffect(() => {
    checkDevice();
  });

  return { isCompactTouchScreen, screenWidth, screenHeight };
};
