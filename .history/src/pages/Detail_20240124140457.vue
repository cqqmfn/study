<template>
  <ul class="news-list">
    <li>编号：{{a}}</li>
    <li>标题：{{b}}</li>
    <li>内容：{{c}}</li>
  </ul>
</template>

<script setup lang="ts" name="About">
  defineProps(['id','title','content'])
</script>

<style scoped>
  .news-list {
    list-style: none;
    padding-left: 20px;
  }

  .news-list>li {
    line-height: 30px;
  }
</style>