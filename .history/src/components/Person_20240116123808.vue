<template>
  <div class="person">
    性：<input type="text"><br>
    名：<input type="text"><br>
    全名：<span>???</span>
  </div>
 </template>
 
 <script lang="ts" setup name="Person">
 
   import {ref} from 'vue'

   let firstName = ref('张')
   let lastName = ref()'三'
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