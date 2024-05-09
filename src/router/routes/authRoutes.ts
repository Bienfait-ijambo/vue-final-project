
export const authRoutes= {
    path: '/login',
    name: 'login',
    component: () => import('../../views/auth/AuthPage.vue'),
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import('../../views/auth/LoginPage.vue')
      },
      {
        path: '/register',
        name: 'register',
        component: () => import('../../views/auth/RegisterPage.vue')
      }
    ]
  }