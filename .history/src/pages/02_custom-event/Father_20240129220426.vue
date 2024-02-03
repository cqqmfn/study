<template>
  <div class="father">
    <h3>父组件</h3>
    <h4>{{ str }}</h4>
    <button @click="str = ''">点我</button>
    <Child/>
  </div>
</template>

<script setup lang="ts" name="Father">
  import Child from './Child.vue'
  import {ref} from 'vue'
  let str = ref('你好')

  // function test(){
  //   str.value = '哈哈'
  // }
</script>

<style scoped>
	.father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
    border-radius: 10px;
	}
	.father button{
		margin-right: 5px;
	}
</style>