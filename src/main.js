import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.css"
import VueGravatar from "vue3-gravatar"

createApp(App).use(store).use(router).use(VueGravatar).mount('#app')

import "bootstrap/dist/js/bootstrap.js"
