
export const adminRoutes= {
    path: '/admin',
    name: 'admin',
    component: () => import('../../views/admin/AdminPage.vue'),
    children: [
      {
        path: '/admin',
        name: 'admin',
        component: () => import('../../views/admin/DashboardPage.vue')
      },
      {
        path: '/create-post',
        name: 'create-post',
        component: () => import('../../views/admin/CreatePostPage.vue')
      },
      {
        path: '/post-lists',
        name: 'post-lists',
        component: () => import('../../views/admin/PostListPage.vue')
      },
     
    ]
  }