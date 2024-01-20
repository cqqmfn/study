import {ref,reactive} from 'vue'
import axios from 'axios'

//数据
let sum = ref(0)

//方法
function add(){
sum.value += 1
}
