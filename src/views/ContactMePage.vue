<template>
  <section class="contact" :style="backgroundStyle">
    <h1 class="contact__title">{{ contactContent.title }}</h1>
    <p class="contact__description">{{ contactContent.description }}</p>
    <div class="contact__container">
      <ContactInfo
        :contactDetails="contactContent.contactDetails"
        :socialLinks="contactContent.socialLinks"
      />
      <ContactForm v-bind="contactContent.contactForm" />
    </div>
  </section>
</template>

<script setup>
import { useMetaTags } from '@/composables/useMetaTags';
import { useBackgroundStyle } from '@/composables/useBackgroundStyle';
import { computed } from 'vue';
import { useContentStore } from '@/stores/contentStore';
import ContactForm from '@/components/ContactForm.vue';
import ContactInfo from '@/components/ContactInfo.vue';

const props = defineProps({
  routeName: String,
});

const contentStore = useContentStore();
const contactContent = computed(() => contentStore.content?.contactMe);

const backgroundStyle = useBackgroundStyle(contactContent.value?.backgroundImageUrl);

useMetaTags(props.routeName);
</script>

<style scoped lang="scss">
.contact {
  padding: 7rem 0;
  min-height: 100vh;

  &__title,
  &__description {
    text-align: center;
  }

  &__title {
    color: $picton-blue;
  }

  &__description {
    margin-bottom: 2rem;
  }

  &__container {
    padding: 3rem;
    background-color: transparent;
    width: 100%;
    max-width: 85rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    flex-direction: column-reverse;
    gap: 8rem;
    flex: 0 1;

    @include respond-to('small') {
      max-width: 75rem;
    }

    @include respond-to('medium') {
      gap: 4rem;
    }

    @include respond-to('large') {
      max-width: 100rem;
      padding: 3rem;
      flex-direction: row;
      align-items: center;
    }

    .contact-form {
      flex: 1 0 auto;
    }
  }

  @include respond-to('medium') {
    padding: 10rem 0;
  }
}
</style>
