import {ref,reactive} from 'vue'
import axios from 'axios'

export default function (){
    //数据
    let dogList = reactive([
      'https://images.dog.ceo/breeds/pembroke/n02113023_4373.jpg'
    ])
    
    //方法
    async function getDog(){
      try {
        let result = await axios.get('https://dog234.ceo/api/breed/pembroke/images/random')
        dogList.push(result.data.message)
      } catch (error) {
        alert(error)
      }
    }
}
