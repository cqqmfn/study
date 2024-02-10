<template>
  <div class="child">
    <h2>我是Child</h2>
  </div>
</template>

<script setup lang="ts" name="Child">
  import {ref} from 'vue'

  let sum = ref(0)
</script>

<style scoped>
.child {
  background-color: skyblue;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 10px;
}
</style>