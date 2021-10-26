import Vue from 'vue';
import { getAuth } from 'firebase/auth';
import App from './App.vue';
import store from './store';
import router from './router';

Vue.config.productionTip = false;

// new Vue({
//   router,
//   store,
//   render: (h) => h(App),
// }).$mount('#app');

const auth = getAuth();

let app;
auth.onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  }
});
