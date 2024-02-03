<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="content">
     ???
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
  let imgUrl = ref('https://img.zcool.cn/community/01a45b55cb46ff6ac7255808e83e13.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100')
  let videoUrl = ref('https://media.w3.org/2010/05/sintel/trailer.mp4')
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
  img,video {
    width: 100%;
  }
  h2 {
    background-color: orange;
    text-align: center;
    font-size: 20px;
    font-weight: 800;
  }
</style>