import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
    },
    {
      path: '/men-shoes',
      name: 'men-shoes',
      component: () => import('@/views/MenShoes.vue'),
    },
    {
      path: '/men-shirts',
      name: 'men-shirts',
      component: () => import('@/views/MenShirts.vue'),
    },
    {
      path: '/men-jackets',
      name: 'men-jackets',
      component: () => import('@/views/MenJackets.vue'),
    },
    {
      path: '/men-jeans',
      name: 'men-jeans',
      component: () => import('@/views/MenJeans.vue'),
    },
    {
      path: '/men-tshirts',
      name: 'men-tshirts',
      component: () => import('@/views/MenTShirts.vue'),
    },
    {
      path: '/women-dresses',
      name: 'women-dresses',
      component: () => import('@/views/WomenDresses.vue'),
    },
    {
      path: '/women-jeans',
      name: 'women-jeans',
      component: () => import('@/views/WomenJeans.vue'),
    },
    {
      path: '/women-jackets',
      name: 'women-jackets',
      component: () => import('@/views/WomenJackets.vue'),
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/views/Cart.vue'),
    },
  ],
});
