<template>
  <input 
  type="text" 
  :value="qwe"
  @input="emit('update:qwe',(<HTMLInputElement>$event.target).value)">
</template>

<script setup lang="ts" name="WtbInput">
  defineProps(['qwe'])
  const emit = defineEmits(['update:qwe'])
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