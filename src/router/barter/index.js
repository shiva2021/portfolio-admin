const barterRoutes = [
  {
    path: '/barter/dashboard',
    name: 'barter-home',
    component: function () {
      return import(/* webpackChunkName: "barter-dashboard" */ '../../views/barter/dashboard.vue')
    }
  }
]

export default barterRoutes;