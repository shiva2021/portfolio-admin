const dashboard = () => import('../../views/apps/portfolio/dashboard.vue')
const pfRoutes = [
  {
    path: 'portfolio/dashboard',
    name: 'portfolio-home',
    component: dashboard
  }
]

export default pfRoutes;