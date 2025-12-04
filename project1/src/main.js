import { createApp } from 'vue'
import App from './App.vue'
import Header from './components/structure/Header.vue'
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';

//createApp(App).mount('#app')

const app = createApp(App);

// déclaration d'un composant global
app.component('app-header', Header);

// déclaration d'un plugin
app.use(ToastPlugin);

app.mount('#app');
