<template>
  <div class="app">
    <h2>当前sum1为：{{ sum1 }}</h2>
    <h2>当前sum2为：{{ sum2 }}</h2>
    <h2>当前car1为：{{ car1 }}</h2>
    <button @click="changeSum1">点我sum1+1</button>
    <button @click="changeSum2">点我sum2+1</button>
    <button @click="changeBrand1">修改品牌(car1)</button>
    <button @click="changeColor1">修改颜色(car1)</button>
    <button @click="changePrice1">修改价格(car1)</button>
  </div>
</template>

<script setup lang="ts" name="App">
  import { ref,readonly } from 'vue'

  let sum1 = ref(0)
  let sum2 = readonly(sum1)
  let car1 = reactive({
    brand:'奔驰',
    options:{
      color:'红色',
      price:100
    }
  })

  function changeSum1(){
    sum1.value += 1
  }
  function changeSum2(){
    sum2.value += 1 //sum2是不能修改的
  }
  function changeBrand(){
    car1.brand = '宝马'
  }
  function changeColor(){
    car1.options.value += 1
  }
  function changePrice(){
    car1.options.value += 1
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