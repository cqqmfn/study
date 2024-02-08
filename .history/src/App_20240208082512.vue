<template>
  <div class="app">
    <h2>{{ msg }}</h2>
    <input type="text" v->
  </div>
</template>

<script setup lang="ts" name="App">
  import {ref} from 'vue'
  let msg = ref('你好')
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