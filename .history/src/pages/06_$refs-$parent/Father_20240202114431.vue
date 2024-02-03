<template>
	<div class="father">
		<h3>父组件</h3>
    <h4>房产：{{ house }}</h4>
		<Child1 />
		<Child2 />
	</div>
</template>

<script setup lang="ts" name="Father">
	import Child1 from './Child1.vue'
	import Child2 from './Child2.vue'
  import {ref} from 'vue'

  
  let house = ref(4)
</script>

<style scoped>
	.father {
		background-color: rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}

	.father button {
		margin-bottom: 10px;
		margin-left: 10px;
	}
</style>

