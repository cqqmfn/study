<template>
  <div class="child2">
    <h3>子组件2</h3>
    <h4>电脑：{{ computer }}</h4>
  </div>
</template>

<script setup lang="ts" name="Child2">
  import {ref} from 'vue'
  import emitter from '@/utils/emitter'
  // 数据
  let computer = ref('联想')
  // 给emitter绑定send-toy事件
  emitter.on('send-toy',()=>{
    console
  })
</script>

<style scoped>
	.child2{
		margin-top: 50px;
		background-color: orange;
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
	}
</style>