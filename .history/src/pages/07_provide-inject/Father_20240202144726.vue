<template>
  <div class="father">
    <h3>父组件</h3>
    <Child/>
  </div>
</template>

<script setup lang="ts" name="Father">
  import Child from './Child.vue'
  import {ref,reactive} from 'vue'

  let money = ref(100)
  let car = reactive({
    brand:'奔驰'
  })

</script>

<style scoped>
  .father {
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
  }
</style>