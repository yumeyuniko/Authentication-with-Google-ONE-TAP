import { createRouter, createWebHistory } from 'vue-router';
import vm from '../main';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
