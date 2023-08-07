import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { store } from './store';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCode, faBars, faXmark, faUser, faEnvelope, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faUser as faUserOutline, faEnvelope as faEnvelopeOutline } from '@fortawesome/free-regular-svg-icons';

library.add(
  faGithub, faLinkedin, faCode,
  faBars, faXmark, faUserOutline,
  faUser, faEnvelope, faEnvelopeOutline,
  faCircleInfo  
)

createApp(App)
.use(store)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
