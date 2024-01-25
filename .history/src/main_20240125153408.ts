
import {createApp} from 'vue'
import App from './App.vue'
// 引入pinia
import {createPinia} from 'pinia'

const app = createApp(App)
// 第二步：创建pinia
const pinia = createPinia()
// di'san'bu
app.mount('#app')