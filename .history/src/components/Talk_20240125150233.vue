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
   // 发请求，下面这行的写法是: 连续解构赋值+重命名
   let {data:{text:title}} = await axios.get('https://api.xygeng.cn/one/get/')
   // 把请求回来的字符串，包装成一个对象
   let obj = {id:nanoid(),title}
   //console.log(obj)
   // 放到数组中
   talkList.unshift(obj)
   //console.log(result.data.text)
  }
</script>

<style scoped>

</style>