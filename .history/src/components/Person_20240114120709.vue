<template>
  <div class="person">
    <!-- 插值语法 -->
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <!-- 绑事件 -->
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
 </template>
 
 <script lang="ts">
   
  export default {
    name:'Person',
    setup(){
     // console.log('@@',this) //setup函数中的this是undefined
     // 数据
     let name = '张三'//注意此时的name不是响应式的
     let age = 18//注意此时的age不是响应式的
     let tel = '15688800000'//注意此时的tel不是响应式的

     //方法
     function changeName (){
       console.log(1)
       name = 'zhang-san'
       console.log(name)
     }
     function changeAge (){
      
       age += 1
     }
     function showTel (){
       alert(tel)
     }

     return {name,age,changeName,changeAge,showTel}
    }
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
 </style>