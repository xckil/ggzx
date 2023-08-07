export const constantRoute = [
  {
    //登录路由
    path: '/login',
    component: () => import('@/view/login/login.vue'),
    name: 'login',
  },
  {
    //主页
    path: '/',
    component: () => import('@/view/home/index.vue'),
    name: 'home',
  },
  {
    //错误提示页面
    path: '/404',
    component: () => import('@/view/404/404.vue'),
    name: '404',
  },
  {
    //重定向
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
  },
  // 测试重定向
  {
    path: '/ttt',
    redirect: '/login',
  },
]
