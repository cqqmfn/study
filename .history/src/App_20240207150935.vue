<template>
  <div class="app">
    <h2>姓名：{{ person2.name }}</h2>
    <h2>年龄：{{ person2.age }}</h2>
    <button @click="person2.age += 1">修改年龄</button>
  </div>
</template>

<script setup lang="ts" name="App">
  import { reactive,toRaw } from 'vue'
  
  let person = reactive({
    name:'tony',
    age:18
  })
  // 用于获取一个响应式对象的原始对象
  let person2 = toRaw(person)

functionsho'w
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