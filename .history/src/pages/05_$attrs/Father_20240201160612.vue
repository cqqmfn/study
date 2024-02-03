<template>
  <div class="father">
    <h3>父组件</h3>
		<Child/>
  </div>
</template>

<script setup lang="ts" name="Father">
	import Child from './Child.vue'
  import {ref} from 'vue'

  let a = ref(1)
let b = ref(1)
let c = ref(1)
let d = ref(1)
</script>

<style scoped>
	.father{
		background-color: rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}
</style>
