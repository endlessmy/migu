import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/hello';
import World from '@/components/world';
import AddClick from '@/components/addClick';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/',
      name: 'World',
      component: World
    },
    {
      path: '/',
      name: 'AddClick',
      component: AddClick
    }
  ]
});
