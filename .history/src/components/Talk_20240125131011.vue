<template>
  <div class="talk">
    <button>获取一句话</button>
    <ul>
      <li v-for="(item,index) in talkList">xxx</li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="Talk">
  import {reactive} from 'vue'
  let talkList = reactive([
    {id:'cc01',titile:'好！'},
    {id:'cc02',titile:'挺好！'},
    {id:'cc03',titile:'都挺好！'}
  ])
</script>

<style scoped>

</style>