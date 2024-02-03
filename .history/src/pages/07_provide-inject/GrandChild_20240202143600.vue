<template>
  <div class="grand-child">
    <h3>我是孙组件</h3>
  </div>
</template>

<script setup lang="ts" name="GrandChild">
  import { inject } from "vue";

  let {money,updateMoney} = inject('moneyContext',{money:0,updateMoney:(param:number)=>{}})
  let car = inject('car',{brand:'未知',price:0})
</script>

<style scoped>
  .grand-child{
    background-color: orange;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px black;
  }
</style>