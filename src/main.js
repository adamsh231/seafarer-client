import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// --------- Prime Vue ---------- //
import PrimeVue from "primevue/config";

import Card from "primevue/card"
import InputText from "primevue/inputtext";
import Button from 'primevue/button';
import InputNumber from "primevue/inputnumber";
import Divider from 'primevue/divider';

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons

import 'primeflex/primeflex.css'
// ------------------------------ //

import './assets/global.scss' // custom

const app = createApp(App)

app.use(store)
app.use(router)

// --------- Prime Vue ---------- //
app.use(PrimeVue)

app.component('Card', Card)
app.component('Button', Button)
app.component('InputText', InputText)
app.component('InputNumber', InputNumber)
app.component('Divider', Divider)
// ------------------------------ //

app.mount('#app')
