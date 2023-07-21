import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

library.add(faGithub, faLinkedin, faChevronDown)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
