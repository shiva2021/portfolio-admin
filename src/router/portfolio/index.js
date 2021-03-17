const Dashboard = () => import('@/views/apps/portfolio/Dashboard.vue')
const content = () => import('@/components/portfolio/content.vue')
const pfRoutes = [
  {
    path: 'portfolio',
    name: 'portfolio-home',
    component: Dashboard,
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