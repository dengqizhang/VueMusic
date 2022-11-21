import { createApp } from 'vue'
import './style.css'
import App from './views/Main.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
