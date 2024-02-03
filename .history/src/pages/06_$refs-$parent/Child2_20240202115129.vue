<template>
  <div class="child2">
    <h3>子组件2</h3>
  </div>
</template>

<script setup lang="ts" name="Child2">
  import {ref} from 'vue'

  // 数据
  let toy = ref('乐高')
  let book = ref(4)
</script>

<style scoped>
	.child2{
		margin-top: 20px;
		background-color: orange;
		padding: 20px;
		border-radius: 10px;
    box-shadow: 0 0 10px black;
	}
</style>
