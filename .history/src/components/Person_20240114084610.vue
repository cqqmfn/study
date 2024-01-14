<template>
  <div class="person">
    
  </div>
 </template>
 
 <script lang="ts">
  
  export default {
    name:'Person',
    data(){
      return {
name:'张三',
age:18,
tel:'1568880'
      }
    }
  }
 </script>
 
 <style scoped>
  .person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
 </style>