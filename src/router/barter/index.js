const barterRoutes = [
  {
    path: 'barter/dashboard',
    name: 'barter-home',
    component: function () {
      return import(/* webpackChunkName: "barter-dashboard" */ '@/views/apps/barter/Dashboard.vue')
    }
  }
]

export default barterRoutes;