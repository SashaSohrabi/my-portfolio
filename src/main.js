import { createApp } from 'vue';
import { createHead } from '@vueuse/head';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import 'normalize.css'; // Normalize styles

//Font Awesome (CSS and Vue integration)
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

// Add all solid icons to the library
library.add(fas);

// Animate.css (CSS Animations)
import 'animate.css';

// Custom SCSS
import './assets/styles/main.scss';

// Create and configure the Vue app
const app = createApp(App);
const head = createHead();
const pinia = createPinia();

// Register FontAwesome component globally
app.component('font-awesome-icon', FontAwesomeIcon);

// Use Vue Router
app.use(router);

// Use Pinia
app.use(pinia);

// Use head instance
app.use(head);

// Mount the Vue app
app.mount('#app');
