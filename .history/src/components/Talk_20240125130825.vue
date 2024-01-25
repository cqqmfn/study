<template>
  <div class="talk">
    <button>获取一句话</button>
    <ul>
      <li>xxx</li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="Talk">
  import {reactive} from 'vue'
  let talkList = reactive([
    {id:'cc01',titile:'好！'},
    {id:'cc02',titile:'h'h'},
    {id:'cc03',titile:''}
  ])
</script>

<style scoped>

</style>