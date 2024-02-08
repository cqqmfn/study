<template>
  <button @click="isShow = true">展示弹窗</button>
  <teleport to='' >

  </teleport>

</template>

<script setup lang="ts" name="Modal">
  import {ref} from 'vue'
  let isShow = ref(false)
</script>

<style scoped>
 .modal {
    background-color: skyblue;
    border-radius: 10px;
    padding: 5px;
    box-shadow: 0 0 5px;
    width: 200px;
    height: 150px;
    text-align: center;
    position: fixed;
    left: 50%;
    top: 20px;
    margin-left: -100px;
 }
</style>