<template>
  <input 
  type="text" 
  :value="modelValue"
  @input=""emit('update')>
</template>

<script setup lang="ts" name="WtbInput">
  defineProps(['modelValue'])
</script>

<style scoped>
  input {
    border: 2px solid black;
    background-image: linear-gradient(45deg,red,yellow,green);
    height: 30px;
    font-size: 20px;
    color: white;
  }
</style>