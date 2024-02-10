import {createApp} from 'vue'
import App from './App.vue'
import Hello from './Hello.vue'

// 创建应用
const app = createApp(App)

app.component('Hello',Hello)
// 全局的属性
app.config.globalProperties.x = 99 

declare module 'vue' {
  interface ComponentCustomProperties {
    x: number
  }
}
app.directive('beauty',(element,{})=>{

})
// 挂载应用
app.mount('#app')