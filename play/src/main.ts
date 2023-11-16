import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElIcon from '@aha-ui/components/icon'
import ElButton from '@aha-ui/components/button'

const components = [ElIcon, ElButton]

const INSTALLED_KEY = Symbol('INSTALLED_KEY')

const ElementPlus = {
  install(app: any) {
    if (app[INSTALLED_KEY]) return

    app[INSTALLED_KEY] = true

    components.forEach((c) => app.use(c))
  },
}

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
