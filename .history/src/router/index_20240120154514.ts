// 创建一个路由器，并暴露出去

// 第一步： 引入createRouter
import {createRouter,createWebHistory} from 'vue-router'
// 引入一个一个可能要呈现组件
import Home from '@/components/Home.vue'
import News from '@/components/News.vue'
import About from '@/components/About.vue'

// 第二步： 创建路由器
const router = createrRouter({
  history:createWebHistory(),//路由器工作模式
  routes:[ //yi

  ]
})
