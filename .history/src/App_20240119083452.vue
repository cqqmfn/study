<template>
  <h2 ref="title2">你好</h2>
  <button @click="showLog">点我输出h2这个元素</button>
  <Person ref="ren"/>
</template>

<script lang="ts" setup name="App">
  import Person from './components/Person.vue'
  import {ref} from 'vue'

  let title2 = ref()

  function showLog(){
      console.log(title2.value)
    }
</script>

