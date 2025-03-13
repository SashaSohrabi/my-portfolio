<template>
  <div class="contact-info">
    <!-- Contact Details -->
    <ul class="contact-info__list">
      <li v-for="(contact, index) in contactDetails" :key="index" class="contact-info__item">
        <a class="contact-info__link" :href="contact.href">
          <font-awesome-icon :icon="contact.icon" class="contact-info__icon" />
        </a>
        {{ contact.text }}
      </li>
    </ul>

    <!-- Social Links -->
    <ul class="contact-info__social">
      <li v-for="(social, index) in socialLinks" :key="index" class="contact-info__social-item">
        <a :href="social.href" target="_blank">
          <font-awesome-icon :icon="social.icon" class="contact-info__social-icon" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
const { contactDetails, socialLinks } = defineProps({
  contactDetails: Array,
  socialLinks: Array,
});
</script>

<style scoped lang="scss">
.contact-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

/* Contact List */
.contact-info__list {
  list-style: none;
  padding: 0;
}

.contact-info__item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* Social Links */
.contact-info__social {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  padding: 0;
}

.contact-info__social-item {
  a {
    text-decoration: none;
    font-size: 3rem;
  }
}
</style>
