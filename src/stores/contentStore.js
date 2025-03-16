import { defineStore } from 'pinia';

export const useContentStore = defineStore('content', {
  state: () => ({
    content: {},
    resumeUrl: '',
  }),
  actions: {
    async fetchContent() {
      try {
        const response = await fetch(import.meta.env.VITE_GITHUB_CONTENT_URL, {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
            Accept: 'application/vnd.github.v3.raw',
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to load content: ${response.status} ${response.statusText}`);
        }

        this.content = await response.json();
      } catch (error) {
        console.error('Error fetching JSON:', error);
      }
    },

    async fetchResumeUrl() {
      try {
        const response = await fetch(import.meta.env.VITE_GITHUB_RESUME_DE_URL, {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
            Accept: 'application/vnd.github.v3+json', // Ensure you get JSON response
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to load resume: ${response.status} ${response.statusText}`);
        }

        const jsonResponse = await response.json();
        this.resumeUrl = jsonResponse.download_url;
      } catch (error) {
        console.error('Error fetching resume:', error);
      }
    },

    async fetchData() {
      await Promise.all([this.fetchContent(), this.fetchResumeUrl()]);
    },
  },
});
