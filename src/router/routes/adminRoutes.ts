
export const adminRoutes= {
    path: '/admin',
    name: 'admin',
    component: () => import('../../views/admin/AdminPage.vue'),
    children: [
      {
        path: '/admin',
        name: 'admin',
        component: () => import('../../views/admin/dashbaord/DashboardPage.vue')
      },
      {
        path: '/create-post',
        name: 'create-post',
        component: () => import('../../views/admin/createPost/CreatePostPage.vue')
      },
      {
        path: '/post-lists',
        name: 'post-lists',
        component: () => import('../../views/admin/postList//PostListPage.vue')
      },
     
    ]
  }