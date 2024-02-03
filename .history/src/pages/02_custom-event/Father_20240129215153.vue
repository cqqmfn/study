<template>
  <div class="father">
    <h3>父组件</h3>
    <button @click="test(6,7,$event)">点我</button>
    <Child/>
  </div>
</template>

<script setup lang="ts" name="Father">
  import Child from './Child.vue'

  function test(value:number,a:number,b:number,c:number){
    console.log('test',value,a,b,c)
  }
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