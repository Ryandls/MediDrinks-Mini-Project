import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import DrinkFilter from '../pages/DrinkFilter.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home', name: 'Home',
      component: Home
    },
    {
      path: '/drink/:id', name: 'DrinkFilter',
      component: DrinkFilter, props: true
    },
    {
      path:'/', redirect: 'Home'
    }
  ]
})
