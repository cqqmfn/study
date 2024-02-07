<template>
  <div class="app">
    
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
  
}
</style>