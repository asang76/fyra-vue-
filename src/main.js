import { createApp } from 'vue'
import router from '@/router.js'
import store from '@/store/index.js';
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faBars,
    faPhone, 
    faCheck, 
    faTimes, 
    faCogs, 
    faHome, 
    faTags, 
    faList, 
    faShoppingCart, 
    faChartLine, 
    faImages, 
    faFolderOpen, 
    faFileExcel,
    
} from "@fortawesome/free-solid-svg-icons";
import {faApple, faInstagram, faFacebook, faTwitter} from "@fortawesome/free-brands-svg-icons";
library.add(faBars, faPhone, faCheck, faTimes, faCogs, faHome, faTags, faList,faApple, faInstagram, faFacebook, faTwitter, faShoppingCart, faChartLine, faImages, faFolderOpen, faFileExcel);


import App from './App.vue';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import BaseCard from '@/components/ui/BaseCard.vue';
import FyraCard from '@/components/ui/FyraCard.vue';
import DemoCard from '@/components/ui/DemoCard.vue';
import './assets/tailwind.css'

const app = createApp(App)
app.config.globalProperties.$backendserver = 'http://localhost:8000';
// app.config.globalProperties.$backendserver = 'https://kirandigital.herokuapp.com'
app.use(router);
app.use(store);
app.component("font-awesome-icon", FontAwesomeIcon);
app.component('base-card', BaseCard);
app.component('fyra-card', FyraCard);
app.component('demo-card', DemoCard);

app.mount('#app')

Vue.use({
    install: function(Vue, options){
        Vue.prototype.$jQuery = require('jquery'); // you'll have this.$jQuery anywhere in your vue project
        }
    });