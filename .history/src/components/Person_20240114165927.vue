<template>
  <div class="person">
    <h2>{{ a }}</h2>
    <!-- 插值语法 -->
    <!-- <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2> -->
    <!-- 绑事件 -->
    <!-- <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button> -->
  </div>
 </template>
 
 <script lang="ts">
   
  export default {
    name:'Person',
    setup(){
      let a = 666
      return {a}
    }
  }
 </script>
 
 <script></script>
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