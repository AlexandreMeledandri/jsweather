import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Summary from './views/Summary.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/summary',
      name: 'summary',
      component: Summary,
    },
  ],
});
