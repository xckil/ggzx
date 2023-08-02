import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:svg-icons-register'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import tplugin from '@/components'
import '@/styles/index.scss'

const app = createApp(App)

app.use(tplugin)
app.use(ElementPlus)

app.mount('#app')
