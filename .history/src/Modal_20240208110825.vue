<template>
  <button @click="isShow">展示弹窗</button>
 <div class="modal" v-show="isShow">
  <h2>我是弹窗的标题</h2>
  <p>我是弹窗的内容</p>
  <button>关闭弹窗</button>
 </div>
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
 }
</style>