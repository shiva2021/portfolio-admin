const barterRoutes = [
  {
    path: 'barter/dashboard',
    name: 'barter-home',
    component: function () {
      return import(/* webpackChunkName: "barter-dashboard" */ '@/views/BTDashboard.vue')
    }
  }
]

export default barterRoutes;