<template>
  <div class="app">
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="person.age += 1">修改年龄</button>
  </div>
</template>

<script setup lang="ts" name="App">
  import { reactive,toRaw } from 'vue'
  
  let person = reactive({
    name:'tony',
    age:18
  })
  let person2 = toaRaw(person)

  console.log('响应式数据',person)
  console.log('原始数据',person)
</script>

<style scoped>
  .app {
    background-color: #ddd;
    border-radius: 10px;
    box-shadow: 0 0 10px;
    padding: 10px;
  }
  button {
    margin: 0 5px
  }
</style>