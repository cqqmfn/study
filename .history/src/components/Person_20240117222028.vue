<template>
  <div class="person">
   <h2>姓名：{{ person.name}}</h2>
   <h2>年龄：{{ person.age}}</h2>
   <h2>汽车：{{ person.car.c1}}、{{ person.car.c2 }}</h2>
   <button @click="chang">修改名字</button>
   <button @click="chang">修改年龄</button>
   <button @click="chang">修改第一台车</button>
   <button @click="chang">修改第二台车</button>
   <button @click="chang">修改整个车</button>
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