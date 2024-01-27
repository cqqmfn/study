import {defineStore} from 'pinia'

export const useCountStore = defineStore('count',{
  // actions里面放置的是一个一个的方法，用于响应组件中的“动作”
  actions:{
    increment(value:number){
      console.log('increment被调用了',value)
      if(this.sum < 10){
        // 修改数据（this是当前的store）
        // console.log(this.sum)
        this.sum += value
      }
    }
  },
  // 真正存储数据的地方
  state(){
    return {
      sum:3,
      school:'primary school',
      address:'希望路20号'
    }
  },
  getters:{
    bigSum(state){
      return state.sum * 10
    },
    upperSchool(state){
      return state.school.to
    }
  }
})

