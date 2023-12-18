import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import ElementPlus from '../../packages/aha-ui'

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
