<template>
  <div class="talk">
    <button @click="getTalk">获取一句话</button>
    <ul>
      <li v-for="talk in talkList" :key="talk.id">{{talk.title}}</li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="Talk">
  import {reactive} from 'vue'
  import axios from "axios"
  import {nanoid} from 'nanoid'
  import {} from 

  // 方法
  async function getTalk(){
   // 发请求，下面这行的写法是: 连续解构赋值+重命名
   //let {data:{hitokoto:title}} = await axios.get('https://v1.hitokoto.cn/')
   // 把请求回来的字符串，包装成一个对象
   //let obj = {id:nanoid(),title}
   //console.log(obj)
   // 放到数组中
   //talkList.unshift(obj)
   //console.log(result.data.hitokoto)
  }
</script>

<style scoped>

.talk {
    background-color: orange;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }
</style>