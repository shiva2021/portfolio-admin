const dashboard = () => import('../../views/apps/portfolio/dashboard.vue')
const content = () => import('../../components/portfolio/content.vue')
const pfRoutes = [
  {
    path: 'portfolio',
    name: 'portfolio-home',
    component: dashboard,
    children: [
      {
        path: 'content',
        name: 'portfolio-content',
        component: content
      }
    ]
  }
]

export default pfRoutes;