import { createRouter, createWebHistory } from 'vue-router'
import { authRoutes } from './routes/authRoutes'
import { adminRoutes } from './routes/adminRoutes'
import { blogRoutes } from './routes/blogRoutes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   
    authRoutes,
    adminRoutes,
    blogRoutes

  ]
})

export default router
