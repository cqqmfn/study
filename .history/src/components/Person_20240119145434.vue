<template>
  <div class="person">
  <h2>{{ a }}</h2>
  </div>
 </template>
 
 <script lang="ts" setup name="Person">
  import {defineProps} from 'vue'

  // 接收a
  defineProps(['a'])

  // 接收a
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