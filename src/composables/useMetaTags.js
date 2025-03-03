import { computed } from 'vue';
import { useHead } from '@vueuse/head';
import { useContentStore } from '@/stores/contentStore';

export const useMetaTags = (routeName) => {
  const contentStore = useContentStore();

  const metaData = computed(() => contentStore.content?.meta?.[routeName] || {});
  const bannerImage = computed(() => contentStore.content?.banner?.backgroundImageUrl || '');

  useHead(() => ({
    title: metaData.value.title || 'Front-End Web Developer - Portfolio Website',
    meta: [
      {
        name: 'description',
        content:
          metaData.value.description || 'A portfolio showcasing my work as a frontend developer.',
      },
      {
        name: 'keywords',
        content:
          metaData.value.keywords ||
          'frontend developer, web development, Vue.js, React.js, Nuxt.js',
      },
      {
        property: 'og:title',
        content: metaData.value.title || 'Front-End Web Developer - Portfolio Website',
      },
      {
        property: 'og:description',
        content:
          metaData.value.description || 'A portfolio showcasing my work as a frontend developer.',
      },
      {
        property: 'og:image',
        content: bannerImage.value,
      },
      { property: 'og:url', content: window.location.href },
    ],
  }));
};
