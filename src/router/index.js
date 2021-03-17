import Vue from 'vue'
import VueRouter from 'vue-router'
import pfRoutes from './portfolio';
import btRoutes from './barter';
import store from '../store'
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: function () {
      return import( /* webpackChunkName: "group-foo" */ '@/views/home.vue')
    }
  },
  {
    path: '/login',
    name: 'login',
    component: function () {
      return import(/* webpackChunkName: "login" */ '@/views/login.vue')
    }
  },
  {
    path: '/app',
    name: 'app-home',
    component: function () {
      return import(/* webpackChunkName: "app-home" */ '@/views/apps/apps.vue')
    },
    children: [...pfRoutes, ...btRoutes]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let string = to.name.split("-")[0];
  let apps = store.state.apps;

  if (to.name.indexOf(string) > -1) {
    let currentApp = apps.find((a) => { return a.text === string });
    store.commit("setCurrentApp", currentApp);
  } else store.commit("setCurrentApp", {});

  if (to.name !== 'login' && !localStorage.getItem('admin-token')) next({ name: 'login' })
  else next()
})

export default router
