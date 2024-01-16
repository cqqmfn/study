<template>
  <div class="person">
  <h2>姓名:{{ person.name }}</h2>
  <h2>年龄:{{ person.age }},{{ nl }}</h2>
  <button @click="changeName">修改名字</button>
  <button @click="changeAge">修改年龄</button>
  </div>
 </template>
 
 <script lang="ts" setup name="Person">
 
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