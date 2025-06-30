import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../components/AppLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/HomePage.vue'),
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
        component: () => import('../views/PortfolioPage.vue'),
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
        component: () => import('../views/ContactMePage.vue'),
        meta: {
          title: 'Contact Me - Get in Touch',
          description:
            'Want to discuss a project or job opportunity? Get in touch with me through my contact page.',
          keywords: 'contact frontend developer, hire web developer, contact Sasha Sohrabi',
        },
      },
      {
        path: 'error',
        name: 'ErrorPage',
        component: () => import('../views/ErrorPage.vue'),
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
  scrollBehavior() {
    // scroll to top on route change
    return { top: 0 };
  },
});

router.beforeEach((to, _, next) => {
  if (to.path === '/error' && to.query.hasError !== 'true') {
    next('/');
  } else {
    next();
  }
});

export default router;
