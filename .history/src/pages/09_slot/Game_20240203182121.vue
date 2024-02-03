<template>
  <div class="game">
    
    <ul>
      <li v-for="g in games" :key="g.id">{{ g.name }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="Game">
  import { reactive } from 'vue'

  let games = reactive([
  {id:'cc01',name:'QQ泡泡堂'},
  {id:'cc02',name:'摩尔庄园'},
  {id:'cc03',name:'赛尔号'},
  {id:'cc04',name:'拳王'},
  ])
</script>

<style scoped>
  .game {
    width: 200px;
    height: 300px;
    background-color: skyblue;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }
  h2 {
    background-color: orange;
    text-align: center;
    font-size: 20px;
    font-weight: 800;
  }
</style>