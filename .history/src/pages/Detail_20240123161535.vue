<template>
  <ul class="news-list">
    <li>编号：{{ route.params }}</li>
    <li>标题：{{ route.params }}</li>
    <li>内容：{{ route.params }}</li>
  </ul>
</template>

<script setup lang="ts" name="About">
  import { useRoute } from 'vue-router';
  const route = useRoute()
  console.log(route)
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