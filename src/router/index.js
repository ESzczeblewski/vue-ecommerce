import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home'),
    },
    {
      path: '/men-shoes',
      name: 'men-shoes',
      component: () => import('@/views/MenShoes'),
    },
    {
      path: '/men-shirts',
      name: 'men-shirts',
      component: () => import('@/views/MenShirts'),
    },
    {
      path: '/men-jackets',
      name: 'men-jackets',
      component: () => import('@/views/MenJackets'),
    },
    {
      path: '/men-jeans',
      name: 'men-jeans',
      component: () => import('@/views/MenJeans'),
    },
    {
      path: '/men-tshirts',
      name: 'men-tshirts',
      component: () => import('@/views/MenTShirts'),
    },
    {
      path: '/women-dresses',
      name: 'women-dresses',
      component: () => import('@/views/WomenDresses'),
    },
    {
      path: '/women-jeans',
      name: 'women-jeans',
      component: () => import('@/views/WomenJeans'),
    },
    {
      path: '/women-jackets',
      name: 'women-jackets',
      component: () => import('@/views/WomenJackets'),
    },
  ],
});
