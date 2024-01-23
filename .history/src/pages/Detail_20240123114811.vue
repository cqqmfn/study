<template>
  <ul class="news-list">
    <li>编号：{{ route.query.a }}</li>
    <li>标题：{{ route.query.b }}</li>
    <li>内容：{{ route.query.c }}</li>
  </ul>
</template>

<script setup lang="ts" name="About">
  import {useRoute} from 'vue-router'
  let route = useRoute()
  // console.log('@',route)
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