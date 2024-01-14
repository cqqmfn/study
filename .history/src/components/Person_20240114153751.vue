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
    beforeCreate(){
      console.log('beforeCreate')
    },
    setup(){
      console.log('setup')
     // console.log(this) //setup函数中的this是undefined,Vue3中已经弱化this了
     // 数据：直接定义变量
     let name = '张三'//原来是写在data中的，注意此时的name、data、tel不是响应式的
     let age = 18
     let tel = '15688800000'
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

// 将数据、
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