import { ref, computed, isRef, toRef } from 'vue';

export const useBackgroundStyle = (backgroundImageUrl) => {
  const bgImageRef = isRef(backgroundImageUrl)
    ? backgroundImageUrl
    : ref(
        typeof backgroundImageUrl === 'object' && backgroundImageUrl !== null
          ? toRef(backgroundImageUrl, 'backgroundImageUrl')
          : { backgroundImageUrl },
      );

  const defaultBackground = 'linear-gradient(rgba(248, 248, 246, 0.8), rgba(248, 248, 246, 0.8))';

  const backgroundStyle = computed(() => {
    const image = bgImageRef.value.backgroundImageUrl
      ? `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${bgImageRef.value.backgroundImageUrl})`
      : defaultBackground;

    return {
      backgroundImage: image,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
    };
  });

  return backgroundStyle;
};
