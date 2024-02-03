<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="content">
      <Category title="热门游戏列表"/>
      <Category title="美食城市推荐"/>
      <Category title="今日影视指南"/>
    </div>
  </div>
</template>

<script setup lang="ts" name="Father">
  import Category from './Category.vue'
  import { ref,reactive } from 'vue'

  let games = reactive([
    {id:'cc01',name:'QQ泡泡堂'},
    {id:'cc02',name:'摩尔庄园'},
    {id:'cc03',name:''},
    {id:'cc04',name:''},
  ])
</script>

<style scoped>
  .father {
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
  }
  .content {
    display: flex;
    justify-content: space-evenly;
  }
</style>