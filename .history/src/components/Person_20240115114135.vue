<template>
  <div class="person">

  </div>
 </template>
 
 <!-- <script lang="ts"> 
  export default {
    name:'Person234',
  }
 </script> -->
 
 <script lang="ts" setup name="Person">

     import {ref} from 'vue'
     
     // 数据：直接定义变量
     let name = ref('张三')//原来是写在data中的，注意此时的name、data、tel不是响应式的
     let age = ref(18)
     let tel = '15688800000'
     let address = '桃花源'

     console.log(1,name)
     console.log(2,age)
     console.log(3,tel)
     console.log(4,address)

     //方法：函数
     function changeName (){
       name.value = 'zhang-san' //注意：这样修改name、age、tel，页面是没有变化的,他们确实修改了，但都不是响应式的
       console.log(name.value)
     }
     function changeAge (){
       age.value += 1
       console.log(age.value)
     }
     function showTel (){
       alert(tel)
       console.log(tel)
     }
    //let a = 666
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
 </style>