<template>
  <div class="app">
    <h2>当前sum1为：{{ sum1 }}</h2>
    <h2>当前sum2为：{{ sum2 }}</h2>
    <h2>当前汽车为：{{ sum2 }}</h2>
    <button @click="changeSum1">点我sum1+1</button>
    <button @click="changeSum2">点我sum2+1</button>
  </div>
</template>

<script setup lang="ts" name="App">
  import { ref,readonly } from 'vue'

  let sum1 = ref(0)
  let sum2 = readonly(sum1)

  function changeSum1(){
    sum1.value += 1
  }
  function changeSum2(){
    sum2.value += 1
  }
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