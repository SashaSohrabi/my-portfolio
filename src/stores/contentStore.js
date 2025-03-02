import { defineStore } from 'pinia';

export const useContentStore = defineStore('content', {
  state: () => ({
    content: {},
  }),
  actions: {
    async fetchContent() {
      try {
        const response = await fetch('/content.json');
        this.content = await response.json();
      } catch (error) {
        console.error('Failed to load content:', error);
      }
    },
  },
});
