const dashboard = () => import('../../views/portfolio/dashboard.vue')
const pfRoutes = [
  {
    path: '/portfolio/dashboard',
    name: 'portfolio-home',
    component: dashboard
  }
]

export default pfRoutes;