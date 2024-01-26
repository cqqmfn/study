import {defineStore} from 'pinia'

export const useTalkStore = defineStore('talk',{
  actions:{
    
  },
  // 真正存储数据的地方
  state(){
    return {
      talkList:[
        {id:'cc01',title:'好！'},
        {id:'cc02',title:'挺好！'},
        {id:'cc03',title:'都挺好！'}
      ]
    }
  }
})