import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import FilterDrink from '../pages/FilterDrink.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home', name: 'Home',
      component: Home
    },
    {
      path: '/drink/:id', name: 'FilterDrink',
      component: FilterDrink, props: true
    },
    {
      path:'/', redirect: 'Home'
    }
  ]
})
