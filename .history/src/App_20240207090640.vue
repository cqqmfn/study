<template>
  <div class="app">
    <h2>求和为：{{ sum }}</h2>
    <h2>名字为：{{ person.name }}</h2>
    <h2>年龄为：{{ person.age }}</h2>
    <button @click="changeSum">sum+1</button>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改整个人</button>
  </div>
</template>

<script setup lang="ts" name="App">
  import {ref,shallowRef,shallowReactive} from 'vue'
  
  let sum = shallowRef(0)
  let person = shallowRef({
    name:'张三',
    age: 18
  })
  let car = shallowReactive()

  function changeSum (){
    sum.value += 1
  }
  function changeName (){
    person.value.name = '李四'
  }
  function changeAge (){
    person.value.age += 1
  }
  function changePerson (){
    person.value = {name:'tony',age:100}
  }
</script>

<style scoped>
  .app {
    background-color: #ddd;
    border-radius: 10px;
    box-shadow: 0 0 10px;
    padding: 10px;
  }
</style>