import {defineStore} from 'pinia'

export const useCountStore = defineStore('count',{
  // 真正存储数据的地方
  state(){
    return {
      sum:6,
      school:'Primary ',
      address:'希望路20号'
    }
  }
})