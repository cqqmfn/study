<template>
  <div class="father">
    <h3>父组件</h3>
    <!-- v-model用在html标签上 -->
    <!-- <input type="text" v-model="username"> -->
    <!-- 以下是v-model的底层原理，与上面那句是等价的 -->
    <!-- <input type="text" :value="username" @input="username = (<HTMLInputElement>$event.target).value" > -->

    <!-- v-model用在组件标签上 -->
    <!-- <WtbInput v-model="username"/> -->
    <!-- 以上这句的原理 -->
    <WtbInput :modelValue="username" @update/>
  </div>
</template>

<script setup lang="ts" name="Father">
import {ref} from 'vue'
import WtbInput from './WtbInput.vue'
// 数据
let username = ref('zhangsan')
</script>

<style scoped>
.father {
  padding: 20px;
  background-color: rgb(165, 164, 164);
  border-radius: 10px;
}
</style>
