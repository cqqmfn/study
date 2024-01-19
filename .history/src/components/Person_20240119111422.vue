<template>
  <div class="person">
  ???
  </div>
 </template>
 
 <script lang="ts" setup name="Person">
  import {type PersonInter} from '@/types'

  //let person:PersonInter = {id:'cc01',name:'张三',age:21}

  let personList:Array<PersonInter> = [
    {id:'cc01',name:'张三'，}
    {id:'cc01',name:'张三'，}
{id:'cc01',name:'张三'，}
    ]
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