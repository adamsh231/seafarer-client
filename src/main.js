import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// ----------- Axios ------------ //
import axios from 'axios'
import VueAxios from 'vue-axios';
// ------------------------------ //

// --------- Prime Vue ---------- //
import PrimeVue from "primevue/config";

import Card from "primevue/card"
import InputText from "primevue/inputtext";
import Button from 'primevue/button';
import InputNumber from "primevue/inputnumber";
import Divider from 'primevue/divider';
import Password from "primevue/password";
import ToastService from "primevue/toastservice";
import Toast from "primevue/toast";

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons

import 'primeflex/primeflex.css'
// ------------------------------ //

// ----------- Custom ------------ //
import globalMixin from './assets/global'
import './assets/global.scss'
// ------------------------------ //


// ========================== Application ============================== //

const app = createApp(App)

app.use(store)
app.use(router)
app.use(VueAxios, axios)

// --------- Prime Vue ---------- //
app.use(PrimeVue)
app.use(ToastService)

app.component('Card', Card)
app.component('Button', Button)
app.component('InputText', InputText)
app.component('InputNumber', InputNumber)
app.component('Divider', Divider)
app.component('Password', Password)
app.component('Toast', Toast)
// ------------------------------ //

app.mixin(globalMixin)

app.mount('#app')
// ===================================================================== //
