import {defineStore} from 'pinia'
import axios from 'axios'
import {nanoid} from 'nanoid'

// export const useTalkStore = defineStore('talk',{
//   actions:{
//     async getATalk(){
//       // 发请求，下面这行的写法是: 连续解构赋值+重命名
//        let {data:{hitokoto:title}} = await axios.get('https://v1.hitokoto.cn/')
//       // 把请求回来的字符串，包装成一个对象
//        let obj = {id:nanoid(),title}
//       //console.log(obj)
//       // 放到数组中
//        this.talkList.unshift(obj)
//       //console.log(result.data.hitokoto)
//     }
//   },
//   // 真正存储数据的地方
//   state(){
//     return {
//       talkList:JSON.parse(localStorage.getItem('talkList') as string) || []
//     }
//   }
// })

import {reactive} from 'vue'
export const useTalkStore = defineStore('talk',()=>{
  // talkList就是state
  const talkList = reactive(
    JSON.parse(localStorage.getItem('talkList') as string) || []
  )

    // getATalk函数相当于action
    async function getATalk(){
      // 发请求，下面这行的写法是: 连续解构赋值+重命名
       let {data:{hitokoto:title}} = await axios.get('https://v1.hitokoto.cn/')
      // 把请求回来的字符串，包装成一个对象
       let obj = {id:nanoid(),title}
      //console.log(obj)
      // 放到数组中
       talkList.unshift(obj)
      //console.log(result.data.hitokoto)
    }
    return {}
})