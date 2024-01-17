<template>
  <div class="person">
    <h1>情况二：监视【ref】定义的【对象类型】数据</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改整个人</button>
  </div>
 </template>
 
 <script lang="ts" setup name="Person">
    import {ref,watch} from 'vue'
    // 数据
    let person = ref({
      name: '张三',
      age: 18
    })
    // 方法
    function changeName(){
      person.value.name += '~'
    }
    function changeAge(){
      person.value.age += 1
    }
    function changeAge(){
      person.value = {name:'李四'，a'ge}
    }
    // 监视

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