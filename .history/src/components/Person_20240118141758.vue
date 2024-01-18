<template>
  <div class="person">
<h2>当前水温：{{ temp }}</h2>
<h2>当前水温：{{ height }}</h2>
<button @click="changeTemp">水温+10</button>
<button @click="change">水位+10</button>

  </div>
 </template>
 
 <script lang="ts" setup name="Person">

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