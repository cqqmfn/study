<template>
  <div class="child">
    <h3>子组件</h3>
    <h4></h4>
  </div>
</template>

<script setup lang="ts" name="Child">
import {ref} from 'vue'
</script>

<style scoped>
	.child{
		background-color: skyblue;
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
	}
</style>
