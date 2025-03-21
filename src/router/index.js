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
      {
        path: '',
        name: 'Home',
        component: HomePage,
        meta: {
          title: 'Front-End Web Developer - Portfolio Website',
          description: 'Welcome to my portfolio website showcasing my frontend development skills.',
          keywords:
            'frontend developer portfolio, Vue.js developer, React.js developer, hire frontend developer, JavaScript expert, web developer portfolio, UI/UX web developer, Sasha Sohrabi web developer',
        },
      },
      {
        path: 'portfolio',
        name: 'Portfolio',
        component: PortfolioPage,
        meta: {
          title: 'My Work - Frontend Projects',
          description: 'Explore my frontend projects including Vue.js, Nuxt.js, and React work.',
          keywords:
            'frontend projects, Vue.js projects, React.js portfolio, modern web applications, JavaScript projects, UI/UX case studies, web development showcase, responsive design examples, best frontend practices, CSS animations and interactions',
        },
      },
      {
        path: 'contact',
        name: 'ContactMe',
        component: ContactMePage,
        meta: {
          title: 'Contact Me - Get in Touch',
          description:
            'Want to discuss a project or job opportunity? Get in touch with me through my contact page.',
          keywords: 'contact frontend developer, hire web developer, contact Sasha Sohrabi',
        },
      },
      {
        path: '/:pathMatch(.*)*',
        redirect: '/',
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
