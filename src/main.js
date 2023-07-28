import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


import { useSmoothScroll } from './composables/useSmoothScroll'
import { useMainHeadMeta } from './composables/useHead/useMainHeadMeta'

import './assets/scss/main.scss'
import './assets/css/tailwind.css'


const app = createApp(App)

app.use(createPinia())
app.use(router)
useSmoothScroll(app)
useMainHeadMeta(app)

app.mount('#app')
