<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="content">
      <Category title="过往热门游戏">
      </Category>
      <!-- <Category title="美食城市推荐"/>
      <Category title="昨日影视指南"/> -->
    </div>
  </div>
</template>

<script setup lang="ts" name="Father">
  import Category from './Category.vue'
  import { ref,reactive } from 'vue'

  let games = reactive([
    {id:'cc01',name:'QQ泡泡堂'},
    {id:'cc02',name:'摩尔庄园'},
    {id:'cc03',name:'赛尔号'},
    {id:'cc04',name:'拳王'},
  ])
  let imgUrl = ref()
  let videoUrl = 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
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