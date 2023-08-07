import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:svg-icons-register'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import globalplugin from '@/components'
import '@/styles/index.scss'
import router from './router'
import pinia from './store'

const app = createApp(App)

app.use(globalplugin) // 注册全局组件
app.use(pinia)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
