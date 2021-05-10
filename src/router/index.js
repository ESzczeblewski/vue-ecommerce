import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home'),
    },
    {
      path: '/men',
      name: 'MenProducts',
      component: () => import('@/views/MenProducts'),
    },
    {
      path: '/women',
      name: 'WomenProducts',
      component: () => import('@/views/WomenProducts'),
    },
  ],
});
