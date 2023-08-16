import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { store } from './store';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { 
  faGithub, faLinkedin,
  faPython, faJava, faSquareJs, faHtml5, faCss3Alt,
  faSass, faReact, faVuejs, faAngular, faGolang, faDocker,
  faNodeJs, faGitlab, faGitAlt
} from '@fortawesome/free-brands-svg-icons';
import { faCode, faBars, faXmark, faUser, faEnvelope, faCircleInfo,
faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faUser as faUserOutline, faEnvelope as faEnvelopeOutline } from '@fortawesome/free-regular-svg-icons';

library.add(
  faGithub, faLinkedin, faCode,
  faBars, faXmark, faUserOutline,
  faUser, faEnvelope, faEnvelopeOutline,
  faCircleInfo, faChevronRight, faChevronLeft,
  faPython, faJava, faSquareJs, faHtml5, faCss3Alt,
  faSass, faReact, faVuejs, faAngular, faGolang, faDocker,
  faNodeJs, faGitlab,faGitAlt
)

createApp(App)
.use(store)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
