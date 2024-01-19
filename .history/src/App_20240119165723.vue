<template>
  <h2 a="1"></h2>
  <Person a="O(∩_∩)O" :list="personList"/>
</template>

<script lang="ts" setup name="App">
  import Person from './components/Person.vue'

  import {reactive} from 'vue'
  import {type Persons} from '@/types'

  let personList = reactive<Persons>([
    {id:'cc01',name:'张三',age:21},  
    {id:'cc02',name:'李四',age:22},
    {id:'cc03',name:'王五',age:23,x:9}
  ])
</script>

