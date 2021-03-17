const Dashboard = () => import('@/views/PFDashboard.vue')
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