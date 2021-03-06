import Vue from 'vue'
import VueRouter from 'vue-router'
import pfRoutes from './portfolio';
import btRoutes from './barter';

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: function () {
      return import(/* webpackChunkName: "login" */ '../views/login.vue')
    }
  },
  {
    path: "/",
    name: "home",
    redirect: "/app",
  },
  {
    path: '/app',
    name: 'app-home',
    component: function () {
      return import(/* webpackChunkName: "app-home" */ '../views/home.vue')
    },
    children: [...pfRoutes]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !localStorage.getItem('admin-token')) next({ name: 'login' })
  else next()
})

export default router
