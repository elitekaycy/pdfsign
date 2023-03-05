import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faScissors, faFile } from '@fortawesome/free-solid-svg-icons'
import { faHeart, faFilePdf } from '@fortawesome/free-regular-svg-icons'


library.add(faBars, faHeart, faFilePdf, faScissors, faFile)

import './assets/main.css'

const app = createApp(App)

// app.component('font-awesome-icon', FontAwesomeIcon)


app.use(createPinia())
app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')
