import {defineStore} from 'pinia'

export const useTalkStore = defineStore('t',{
  // 真正存储数据的地方
  state(){
    return {
      sum:6
    }
  }
})