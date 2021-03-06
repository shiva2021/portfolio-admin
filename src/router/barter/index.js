const barterRoutes = [
  {
    path: '/barter/home',
    name: 'barter-home',
    component: function () {
      return import(/* webpackChunkName: "barter-home" */ '../../views/barter/dashboard.vue')
    }
  }
]

export default barterRoutes;