export default [
  {
    // =============================================================================
    // MAIN LAYOUT ROUTES
    // =============================================================================
    path: '',
    component: () => import('@/layouts/Main.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        redirect: '/users'
      },
      {
        path: '/users',
        name: 'users-list',
        component: () => import('@/views/UsersList.vue'),
        children: [
          {
            path: ':userId',
            name: 'user-info',
            component: () => import('@/views/UserInfo.vue')
          }
        ]
      }
    ]
  },
  {
    // =============================================================================
    // FULL PAGE LAYOUT ROUTES
    // =============================================================================
    path: '',
    component: () => import('@/layouts/FullPage.vue'),
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import('@/pages/Login.vue')
      },
      {
        path: '/error-404',
        name: 'page-error-404',
        component: () => import('@/pages/Error404.vue')
      }
    ]
  },
  // Redirect to 404 page, if no match found
  {
    path: '*',
    redirect: '/error-404'
  }
]
