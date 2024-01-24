<template>
  <ul class="news-list">
    <li>编号：{{id}}</li>
    <li>标题：{{y}}</li>
    <li>内容：{{z}}</li>
  </ul>
</template>

<script setup lang="ts" name="About">
  defineProps(['x','y','z'])
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