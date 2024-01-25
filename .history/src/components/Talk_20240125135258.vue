<template>
  <div class="talk">
    <button @click="getTalk">获取一句话</button>
    <ul>
      <li v-for="talk in talkList" :key="talk.id">{{talk.titile}}</li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="Talk">
  import {reactive} from 'vue'
  import axios from "axios"
  // 数据
  let talkList = reactive([
    {id:'cc01',titile:'好！'},
    {id:'cc02',titile:'挺好！'},
    {id:'cc03',titile:'都挺好！'}
  ])
  // 方法
  async function getTalk(){
   let result = await axios.get('https://v1.hitokoto.cn')
   console.log(result.data)
  }
</script>

<style scoped>

</style>