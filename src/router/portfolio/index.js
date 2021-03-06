const pfRoutes = [
  {
    path: '/portfolio/home',
    name: 'portfolio-home',
    component: function () {
      return import(/* webpackChunkName: "portfolio-home" */ '../../views/portfolio/dashboard.vue')
    }
  }
]

export default pfRoutes;