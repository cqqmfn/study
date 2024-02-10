<template>
  <div class="app">
    <h2>我是App组件</h2>
    <Suspense>
      <template>
        <div>
          
        </div>
      </template>
    </Suspense>
    <Child/>
  </div>
</template>

<script setup lang="ts" name="App">
  import Child from './Child.vue'
  import 
</script>

<style>
.app {
  background-color: #ddd;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 10px;
}
</style>