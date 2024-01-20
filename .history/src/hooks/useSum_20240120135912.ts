import {ref,reactive} from 'vue'
import axios from 'axios'

export defaultfunction(){

}
//数据
let sum = ref(0)

//方法
function add(){
sum.value += 1
}
