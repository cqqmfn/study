<template>

</template>

<script setup lang="ts" name="App">
  import { ref,readonly,reactive,shallowReadonly } from 'vue'

  let sum1 = ref(0)
  let sum2 = readonly(sum1)
  let car1 = reactive({
    brand:'奔驰',
    options:{
      color:'红色',
      price:100
    }
  })
  let car2 = shallowReadonly(car1)

  function changeSum1(){
    sum1.value += 1
  }
  function changeSum2(){
    sum2.value += 1 //sum2是不能修改的
  }
  function changeBrand2(){
    car2.brand = '宝马'
  }
  function changeColor2(){
    car2.options.color = '绿色'
  }
  function changePrice2(){
    car2.options.price += 10
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