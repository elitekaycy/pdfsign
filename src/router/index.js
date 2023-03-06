import { createRouter, createWebHistory } from 'vue-router'
import EsignView from '../views/EsignView.vue'
import EsignPdfView from '../views/EsignPdfView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'esign',
      component: EsignView
    },
    {
      path: '/pdf/:pdfname',
      name: 'pdfviewer',
      component: EsignPdfView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
