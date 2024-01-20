import {ref,reactive} from 'vue'
import axios from 'axios'

//数据
let sum = ref(0)

//方法
function add(){
sum.value += 1
}
async function getDog(){
  try {
    let result = await axios.get('https://dog234.ceo/api/breed/pembroke/images/random')
    dogList.push(result.data.message)
  } catch (error) {
    alert(error)
  }
}