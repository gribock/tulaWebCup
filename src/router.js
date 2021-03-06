import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Redirect from './views/Redirect.vue'
import Logout from './views/Logout.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
    },
    {
      path: '/redirect',
      name: 'redirect',
      component: Redirect
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    }
  ]
})
