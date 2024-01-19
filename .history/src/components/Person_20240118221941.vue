<template>
  <div class="person">
     <h1>中国</h1>
     <h2>上海</h2>
     <h3>深圳</h3>
     <button @click="showLog">点我输出h2这个元素</button>
  </div>
 </template>
 
 <script lang="ts" setup name="Person">
    function showLog(){
      console.log()
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