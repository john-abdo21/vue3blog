import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue')
    // },
    // {
    //   path: '/services',
    //   name: 'services',
    //   component: () => import('../views/ServicesView.vue')
    // },
    // {
    //   path: '/works',
    //   name: 'works',
    //   component: () => import('../views/WorksView.vue')
    // },
    // {
    //   path: '/contact',
    //   name: 'contact',
    //   component: () => import('../views/ContactView.vue')
    // },
  ]
})

export default router
