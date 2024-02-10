import {createApp} from 'vue'
import App from './App.vue'
import hello from './Hello.vue'

// 创建应用
const app = createApp(App)

app.component('')

// 挂载应用
app.mount('#app')