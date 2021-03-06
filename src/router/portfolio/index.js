const routes = [
  {
    path: '/portfolio/home',
    name: 'portfolio-home',
    component: function () {
      return import(/* webpackChunkName: "portfolio-home" */ '../views/portfolio/home.vue')
    }
  }
]