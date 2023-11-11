import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import Notifications from 'notiwind'
import '@vuepic/vue-datepicker/dist/main.css'
import {registerComponents} from "./plugins/globalComponents.js"

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(Notifications)
registerComponents(app)
app.mount('#app')
