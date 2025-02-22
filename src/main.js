import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Bootstrap 5 (CSS + JS with Popper)
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

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

// Register FontAwesome component globally
app.component('font-awesome-icon', FontAwesomeIcon);

// Use Vue Router
app.use(router);

// Mount the Vue app
app.mount('#app');
