<template>
  <div class="person">

  </div>
 </template>
 
 <script lang="ts" setup name="Person">
     import {ref,reactive} from 'vue'

     // 数据
     let car = reactive({brand:'奔驰',price:100})
     let sum = ref(0)

     // 方法
     function changeBrand(){
      car.brand = '宝马'
     }
     function changePrice(){
      car.price += 10
     }
     function changeCar(){
      //car = {brand: '奥拓',price: 1}//这么写页面不更新
      //car = reactive({brand: '奥拓',price: 1})//这么写页面不更新
      //这么写页面才更新
      Object.assign(car,{brand:'奥拓',price:1})
      
     }
     function changeSum(){
      sum.value += 1
      //sum = ref(9)
     }
 </script>

 <style scoped>
  .person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
  button {
    margin: 0 5px;
  }
  li {
    font-size: 20px;
  }
 </style>