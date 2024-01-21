// 创建一个路由器，并暴露出去

// 第一步： 引入createRouter
import {createRouter,createWebHistory,createWebHashHistory} from 'vue-router'
// 引入一个一个可能要呈现组件
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'
import Detail from '@/pages/Detail.vue'

// 第二步： 创建路由器
const router = createRouter({
  history:createWebHistory(),//路由器工作模式
  routes:[ //一个一个的路由规则
   {
     name:'one',
     path:'/home',
     component:Home
   },
   {
    name:'two',
    path:'/news',
    component:News,
   },
   {
    name:'three',
    path:'/about',
    component:About
   }
  ]
})

// 暴露出去router
export default router
