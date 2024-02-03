// 引入mitt
import mitt from 'mitt'

// 调用mitt得到emitter，emitter能绑定事件、触发事件
const emitter = mitt()

// 绑定事件
emitter.on('asd',()=>{
  console.log('asd被调用了')
})


// 暴露emitter
export default emitter