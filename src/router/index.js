import Vue from 'vue'
import VueRouter from 'vue-router'

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
    path: '/',
    name: 'home',
    component: function () {
      return import(/* webpackChunkName: "home" */ '../views/home.vue')
    }
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
