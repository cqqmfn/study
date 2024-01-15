<template>
  <div class="person">

  </div>
 </template>
 
 <!-- <script lang="ts"> 
  export default {
    name:'Person234',
  }
 </script> -->
 
 <script lang="ts" setup name="Person">
     
     // 数据：直接定义变量
     let name = ref('张三')//原来是写在data中的，注意此时的name、data、tel不是响应式的

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
 </style>