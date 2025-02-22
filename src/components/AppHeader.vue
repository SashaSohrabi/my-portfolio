<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink
          v-for="(link, index) in menuLinks"
          :key="index"
          :to="link.path"
          style="margin-right: 5px"
          >{{ link.name }}</RouterLink
        >
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const menuLinks = ref([
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact', path: '/contact' },
]);
</script>
