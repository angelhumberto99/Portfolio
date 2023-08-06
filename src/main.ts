import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { store } from './store';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCode, faBars, faXmark, faUser as faUserSolid} from '@fortawesome/free-solid-svg-icons';
import { faUser as faUserOutline} from '@fortawesome/free-regular-svg-icons';

library.add(faGithub, faLinkedin, faCode, faBars, faXmark, faUserOutline, faUserSolid)

createApp(App)
.use(store)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
