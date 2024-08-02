import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { getCategory } from '@/apis/testAPI'

import App from './App.vue'
import router from './router'

getCategory().then(res => {
  console.log(res)
})

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
