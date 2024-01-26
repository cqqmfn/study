import {defineStore} from 'pinia'

export const useCountStore = defineStore('count',{
  // actions里面放置的是一个一个的方法，用于响应组件中的“动作”
  actions:{
    increment(){
      console.log('')
    }
  }
  // 真正存储数据的地方
  state(){
    return {
      sum:6,
      school:'Primary School',
      address:'希望路20号'
    }
  }
})