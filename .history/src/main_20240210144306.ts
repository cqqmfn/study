import {createApp} from 'vue'
import App from './App.vue'
import Hello from './Hello.vue'

// 创建应用
const app = createApp(App)

app.component('Hello',Hello)
// app.config.globalProperties 

// 挂载应用
app.mount('#app')