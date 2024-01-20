<template>
  <div class="person">
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="add">点我加sum+1</button>
    <hr>
    <img v-for="(dog,index) in dogList" :src="dog" :key="index">
    <button @click="getDog">再来一只🐕</button>
  </div>
 </template>
 
 <script lang="ts" setup name="Person">
  import {ref,reactive} from 'vue'
  import axios from 'axios'

  //数据
  let sum = ref(0)
  let dogList = reactive([
    'https://images.dog.ceo/breeds/pembroke/n02113023_4373.jpg'
  ])
  //方法
  function add(){
   sum.value += 1
  }
  function getDog(){
    axios.get('https://dog.ceo/api/breed/pembroke/images/random').then(
      response => {},
      error => {}
      }
    )
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
  img {
    height: 100px;
  }
 </style>