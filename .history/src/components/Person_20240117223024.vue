<template>
  <div class="person">
   <h2>姓名：{{ person.name}}</h2>
   <h2>年龄：{{ person.age}}</h2>
   <h2>汽车：{{ person.car.c1}}、{{ person.car.c2 }}</h2>
   <button @click="changeName">修改名字</button>
   <button @click="changeAge">修改年龄</button>
   <button @click="changeC1">修改第一台车</button>
   <button @click="changeC2">修改第二台车</button>
   <button @click="changeCar">修改整个车</button>
  </div>
 </template>
 
 <script lang="ts" setup name="Person">
    import {reactive,watch} from 'vue'
    // 数据
    let person = reactive({
      name:'张三',
      age:18,
      car:{
        c1:'奔驰',
        c2:'宝马'
      }
    })
    // 方法
    function changeName(){
      person.name += '~'
    }
    function changeAge(){
      person.age 
    }
    function changeC1(){
      person.
    }
    function changeC2(){
      person.
    }
    function changeCar(){
      person.
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