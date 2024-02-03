<template>
  <div class="father">
    <h3>父组件</h3>
    <h4>a:</h4>a:
		<Child/>
  </div>
</template>

<script setup lang="ts" name="Father">
	import Child from './Child.vue'
  import {ref} from 'vue'

  let a = ref(1)
  let b = ref(2)
  let c = ref(3)
  let d = ref(4)
</script>

<style scoped>
	.father{
		background-color: rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}
</style>
