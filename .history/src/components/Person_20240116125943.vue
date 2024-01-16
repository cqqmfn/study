<template>
  <div class="person">
    性：<input type="text" v-model="firstName"><br>
    名：<input type="text" v-model="lastName"><br>
    全名：<span>{{firstName}}-{{lastName}}</span><br>
  </div>
 </template>
 
 <script lang="ts" setup name="Person">
 
   import {ref,comp} from 'vue'

   let firstName = ref('zhang')
   let lastName = ref('san')
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