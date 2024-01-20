<template>
  <div class="person">
<h2>当前求和为：{{ sum }}</h2>
<button @click="add">点我加1</button>
  </div>
 </template>
 
 <script lang="ts" setup name="Person">


  //方法
  function add(){

  }
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