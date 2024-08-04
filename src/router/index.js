import { createRouter, createWebHistory } from 'vue-router'

// vite 中的环境变量 import.meta.env.BASE_URL  就是 vite.config.js 中的 base 配置项
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { 
      path: '/PlatformIntroduce',
      component: () => import('@/views/PlatformIntroduce/PlatformIntroduce.vue')
    },
    {
      path: '/',
      component: () => import('@/views/LayoutContainer.vue'),
      redirect: '/ApkParsing',
      children: [
        {
          path: '/ApkParsing',
          component: () => import('@/views/ApkParsing/ApkParsing.vue')
        },
        {
          path: '/ApkList',
          component: () => import('@/views/ApkList/ApkList.vue')
        },
        {
          path: '/report',
          component: () => import('@/views/Report.vue')
        }
      ]
    }
  ]
})

export default router