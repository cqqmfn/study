<template>
  <div class="father">
    <h3>父组件</h3>
    <input type="text">
  </div>
</template>

<script setup lang="ts" name="Father">
import {ref} from 'vue'
// 数据
let username = ref('zhangsan')
</script>

<style scoped>
.father {
  padding: 20px;
  background-color: rgb(165, 164, 164);
  border-radius: 10px;
}
</style>
