<template>
  <div class="person">
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="add">点我sum+1</button>
  </div>
 </template>
 
 <script lang="ts" setup name="Person">
  import {ref,onBeforeMount} from 'vue'

  // 数据
  let sum = ref(0)
  // 方法
  function add(){
    sum.value += 1
  }
  // 创建
  console.log('创建')
  // 挂载前
  onB

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