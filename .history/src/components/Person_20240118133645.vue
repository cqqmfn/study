<template>
  <div class="person">

  </div>
 </template>
 
 <script lang="ts" setup name="Person">
    import {reactive,watch} from 'vue'
    // 数据
    let person = reactive({
      name:'张三',
      age:18,
      car:{
        c1:'奔驰',
        c2:'宝马'
      }
    })
    // 方法
    function changeName(){
      person.name += '~'
    }
    function changeAge(){
      person.age += 1
    }
    function changeC1(){
      person.car.c1 = '奥迪'
    }
    function changeC2(){
      person.car.c2 = '大众'
    }
    function changeCar(){
      person.car = {c1:'雅迪',c2:'爱玛'}
    }

    //监视，情况五：监视上述的多个数据
    watch([()=>person.name,person.car],(newValue,oldValue)=>{
      console.log('person.name变化了',newValue,oldValue)
    },{deep:true})
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