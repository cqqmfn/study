<template>
  <div class="person">
    <ul>
      <li v-for="item in l"></li>
    </ul>
  </div>
 </template>
 
 <script lang="ts" setup name="Person">
  import {defineProps} from 'vue'

  // 接收a
  defineProps(['a','list'])

  // 接收a,同时将props保存起来
  /*let x = defineProps(['a'])
  console.log(x.a)*/
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