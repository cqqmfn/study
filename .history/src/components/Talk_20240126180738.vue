<template>
  <div class="talk">
    <button @click="getTalk">获取一句话</button>
    <ul>
      <li v-for="talk in talkStore.$state.talkList" :key="talk.id">{{talk.title}}</li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="Talk">
  import {reactive} from 'vue'
  import axios from "axios"
  import {nanoid} from 'nanoid'
  import {useTalkStore} from '@/store/talk'

  const talkStore = useTalkStore()

  // 方法
  function getTalk(){
    talkStore.getA
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