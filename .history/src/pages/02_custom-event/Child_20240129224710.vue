<template>
  <div class="child">
    <h3>子组件</h3>
    <h4>玩具：{{ toy }}</h4>
  </div>
</template>

<script setup lang="ts" name="Child">
import {ref,onMounted} from 'vue'
let toy = ref('乐高')
// 声明事件
const emit = defineEmits(['haha'])

onMounted(()=>{
  setTimeout(() => {
    emit()
  },3000);
})
</script>

<style scoped>
	.child{
		margin-top: 10px;
		background-color: rgb(76, 209, 76);
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
	}
</style>