import { createApp } from 'vue';
import { createHead } from '@vueuse/head';
import { createPinia } from 'pinia';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

import App from './App.vue';
import router from './router';

import 'normalize.css'; // Normalize styles

//Font Awesome (CSS and Vue integration)
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons'; // Solid icons
import { fab } from '@fortawesome/free-brands-svg-icons'; // Brand icons

library.add(fas, fab);

// Custom SCSS
import './assets/styles/main.scss';

// Create and configure the Vue app
const app = createApp(App);
const head = createHead();
const pinia = createPinia();

// Use Vue Toastification
app.use(Toast, {
  // Toast configuration options
  position: 'bottom-right',
  timeout: 3000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: 'button',
  icon: true,
});

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
