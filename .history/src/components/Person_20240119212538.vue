<template>
  <div class="person">
    <ul>
      <li v-for="item in list" :key="item.id">
        {{ item.name }} -- {{ item.age }}
      </li>
    </ul>
  </div>
 </template>
 
 <script lang="ts" setup name="Person">
  import {defineProps} from 'vue'

  // 只接收list
  // defineProps(['list'])

  // 接收list+限制类型
  defineProps<{list:Persons}>()

  // 接收list,同时将props保存起来
  /*let x = defineProps(['list'])
  console.log(x.list)*/
 </script>

 <style scoped>
  .person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
  button {
    margin: 0 5px;
  }
  li {
    font-size: 20px;
  }
 </style>