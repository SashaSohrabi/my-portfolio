import { createRouter, createWebHistory } from 'vue-router';
import Layout from '../components/AppLayout.vue';
import HomePage from '../views/HomePage.vue';
import PortfolioPage from '../views/PortfolioPage.vue';
import ContactMePage from '../views/ContactMePage.vue';

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '', name: 'Home', component: HomePage },
      { path: 'portfolio', name: 'Portfolio', component: PortfolioPage },
      { path: 'contact', name: 'ContactMe', component: ContactMePage },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
