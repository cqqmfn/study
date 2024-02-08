<template>
  <div class="app">
    <h2>{{ msg }}</h2>
    <input type="text" v-model="msg">
  </div>
</template>

<script setup lang="ts" name="App">
  import {ref,customRef} from 'vue'

  // 使用Vue提供的默认ref定义响应式数据，数据一变，页面就更新
  let msg = ref('你好')

  // 使用Vue提供的customRef定义响应式数据
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