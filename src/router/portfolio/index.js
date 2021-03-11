const dashboard = () => import('../../views/apps/portfolio/dashboard.vue')
const addContent = () => import('../../components/portfolio/addcontent.vue')
const pfRoutes = [
  {
    path: 'portfolio',
    name: 'portfolio-home',
    component: dashboard,
    children: [
      {
        path: 'addcontent',
        name: 'portfolio-add-content',
        component: addContent
      }
    ]
  }
]

export default pfRoutes;