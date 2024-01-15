<template>
  <div class="person">
    <h2>一辆{{ car.brand }}车，价值{{ car.price }}万</h2>
    <button></button>
  </div>
 </template>
 
 <script lang="ts" setup name="Person">
     
     // 数据
     let car = {brand:'奔驰',price:100}

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