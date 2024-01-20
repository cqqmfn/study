<template>
  <div class="person">
<h2></h2>
  </div>
 </template>
 
 <script lang="ts" setup name="Person">
  import {defineProps,withDefaults} from 'vue'
  import {type Persons} from '@/types'

  // 只接收list
  // defineProps(['list'])

  // 接收list+限制类型
  // defineProps<{list:Persons}>()

  // 接收list+限制类型+限制必要性+指定默认值
  withDefaults(defineProps<{list?:Persons}>(),{
    list:()=> [{id:'cc04',name:'香奈儿',age:24}]
  })

  // 接收list,同时将props保存起来
  /*let x = defineProps(['list'])
  console.log(x.list)*/
 </script>

 <style scoped>
  .person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
  button {
    margin: 0 5px;
  }
  li {
    font-size: 20px;
  }
 </style>