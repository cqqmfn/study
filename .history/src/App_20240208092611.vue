<template>
  <div class="app">
    <h2>{{ msg }}</h2>
    <input type="text" v-model="msg">
  </div>
</template>

<script setup lang="ts" name="App">
  import {ref,customRef} from 'vue'

  // 使用Vue提供的默认ref定义响应式数据，数据一变，页面就更新
  // let msg = ref('你好')

  // 使用Vue提供的customRef定义响应式数据
  let initValue = '你好'
  let timer
  // track(跟踪)、trigger(触发)
  let msg = customRef((track,trigger)=>{
    return {
      // get何时调用？-msg被读取时
      get(){
        track() //告诉Vue数据msg很重要，你要对msg进行持续关注，一旦msg变化就去更新
        return initValue
      },
      // set何时调用？-msg被修改时
      set(value){
        timer = setTimeout(()=>{
          initValue = value
          trigger() //通知Vue一下数据msg变化了
        },1000);
      }
    }
  })
</script>

<style scoped>
  .app {
    background-color: #ddd;
    border-radius: 10px;
    box-shadow: 0 0 10px;
    padding: 10px;
  }
  button {
    margin: 0 5px
  }
</style>