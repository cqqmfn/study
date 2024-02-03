<template>
  <div class="child">
    <h3>子组件</h3>
    <h4>玩具：{{ toy }}</h4>
    <h4>父给的车：{{ car }}</h4>
    <button @click="send">把玩具给父亲</button>
  </div>
</template>

<script setup lang="ts" name="Child">
import {ref} from 'vue'

//数据
let toy = ref('乐高')
//声明接受props
let props = defineProps(['car','sendToy'])
//fa'g'fa
</script>

<style scoped>
	.child{
		background-color: skyblue;
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
	}
</style>
