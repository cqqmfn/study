<template>
  <div class="app">
    <h2>求和为：{{ sum }}</h2>
    <h2>名字为：{{ person.name }}</h2>
    <h2>年龄为：{{ person.age }}</h2>
    <button @click="changeSum">sum+1</button>
    <button @click="changeName">修改</button>
    <button @click="change">修改</button>
    <button @click="change">修改</button>
  </div>
</template>

<script setup lang="ts" name="App">
  import {ref} from 'vue'
  
  let sum = ref(0)
  let person = ref({
    name:'张三',
    age: 18
  })
</script>

<style scoped>
  .app {
    background-color: #ddd;
    border-radius: 10px;
    box-shadow: 0 0 10px;
    padding: 10px;
  }
</style>