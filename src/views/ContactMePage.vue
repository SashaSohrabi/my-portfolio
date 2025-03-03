<template>
  <div class="contact">
    <h1>This is a contact page</h1>
  </div>
</template>

<script setup>
import { useMetaTags } from '@/composables/useMetaTags';

const props = defineProps({
  routeName: String,
});

useMetaTags(props.routeName);
</script>

<style scoped>
.contact {
  padding-top: 100px;
  min-height: calc(100vh - 200px);
}
</style>
