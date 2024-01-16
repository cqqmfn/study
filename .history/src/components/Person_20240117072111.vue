<template>
  <div class="person">
   <h2>当前求和为：{{ sum }}</h2>
   <button @click="changeSum">点我sum+1</button>
  </div>
 </template>
 
 <script lang="ts" setup name="Person">
import {ref} from 'vue'
// 数据
let sum = ref(0)
// 方法
function changeSum(){
  sum.value += 1
}
// 监视

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