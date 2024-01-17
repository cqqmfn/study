<template>
  <div class="person">
    <h1>情况一：监视【ref】定义的【基本类型】数据</h1>
  </div>
 </template>
 
 <script lang="ts" setup name="Person">
import {ref,watch} from 'vue'

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