import { defineStore } from 'pinia';

export const useContentStore = defineStore('content', {
  state: () => ({
    content: {},
  }),
  actions: {
    async fetchContent() {
      const response = await fetch('/content.json');
      this.content = await response.json();
    },
  },
});
