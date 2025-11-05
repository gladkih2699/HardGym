import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
        path: '/',
        component: () => import('@/pages/MainPage.vue')
    },
    {
        path: '/raspisanie-trenirovok',
        component: () => import('@/pages/TimeTable.vue')
    },
    {
        path: '/abonementy',
        component: () => import('@/pages/Subscriptions.vue')
    },
    {
        path: '/trenerskiy-sostav',
        component: () => import('@/pages/CoachList.vue')
    },
    {
      path: '/:catchAll(.*)*',
      name: 'NotFound',
      component: () => import('@/pages/NotFound.vue')
    }
  ]
});

export default router;
