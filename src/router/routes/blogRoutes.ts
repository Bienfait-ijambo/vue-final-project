
export const blogRoutes= {
    path: '/',
    name: 'home',
    component: () => import('../../views/blog/BlogPage.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../../views/blog/home/HomePage.vue')
      },
      {
        path: '/single-post/:slug',
        name: 'singlePost',
        component: () => import('../../views/blog/singlePost/SinglePostPage.vue')
      },
      
      
     
    ]
  }