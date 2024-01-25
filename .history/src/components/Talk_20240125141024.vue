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
  import {nanoid} from 'nanoid'
  // 数据
  let talkList = reactive([
    {id:'cc01',titile:'好！'},
    {id:'cc02',titile:'挺好！'},
    {id:'cc03',titile:'都挺好！'}
  ])
  // 方法
  async function getTalk(){
   // 发请求
   let result = await axios.get('https://v1.hitokoto.cn')
   // 把请求回来的字符串，包装成一个对象
   let obj = {id:nanoid(),}
   //console.log(result.data.hitokoto)
  }
</script>

<style scoped>

</style>