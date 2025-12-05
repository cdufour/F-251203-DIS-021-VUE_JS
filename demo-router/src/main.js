import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Header from './components/header/index.vue'
import CustomButton from './components/CustomButton.vue'

const app = createApp(App)

app.component('app-header', Header)
app.component('custom-btn', CustomButton)

app.use(router) // plugin

app.mount('#app')
