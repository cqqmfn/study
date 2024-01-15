<template>
  <div class="person">
    <!-- <h2>{{ a }}</h2> -->
    <!-- 插值语法 -->
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <h2>地址： {{ address }}</h2>
    <!-- 绑事件 -->
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
 </template>
 
 <!-- <script lang="ts"> 
  export default {
    name:'Person234',
  }
 </script> -->
 
 <script lang="ts" setup name="Person">

     import {ref} from 'vue'
     
     // 数据：直接定义变量
     let name = ref('张三')//原来是写在data中的，注意此时的name、data、tel不是响应式的
     let age = ref(18)
     let tel = '15688800000'
     let address = '桃花源'

console.log(1,name)
console.log(1,name)
console.log(1,name)
console.log(1,name)
     //方法：函数
     function changeName (){
       console.log(1)
       name = 'zhang-san' //注意：这样修改name、age、tel，页面是没有变化的,他们确实修改了，但都不是响应式的
       console.log(name)
     }
     function changeAge (){
       console.log(2)
       age += 1
       console.log(age)
     }
     function showTel (){
       console.log(3)
       alert(tel)
       console.log(tel)
     }
    //let a = 666
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