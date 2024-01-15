<template>
  <div class="person">
    <h2>一辆{{ car.brand }}车，价值{{ car.price }}万</h2>
    <button @click="changePrice">修改汽车的价格</button>
    <br>
    <h2>游戏列表：</h2>
  </div>
 </template>
 
 <script lang="ts" setup name="Person">
     import {reactive} from 'vue'

     // 数据
     let car = reactive({brand:'奔驰',price:100})
     let games = [
     {id: '01',name:'鹅鸦杀'}
     ]
     //console.log(car)
     //console.log(Proxy)

     // 方法
     function changePrice(){
      car.price += 10
      console.log(car.price)
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
 </style>