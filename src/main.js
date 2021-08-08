import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// ----------- Axios ------------ //
import axios from 'axios'
import VueAxios from 'vue-axios';
// ------------------------------ //

// ----------- Moment ------------ //
import moment from "moment/moment";
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
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Toolbar from 'primevue/toolbar';
import FileUpload from 'primevue/fileupload';
import Calendar from 'primevue/calendar';
import Checkbox from 'primevue/checkbox';
import RadioButton from 'primevue/radiobutton';
import Fieldset from 'primevue/fieldset';
import ProgressSpinner from 'primevue/progressspinner';
import ConfirmDialog from 'primevue/confirmdialog';
import ConfirmationService from 'primevue/confirmationservice';

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
app.use(moment)

// --------- Prime Vue ---------- //
app.use(PrimeVue)
app.use(ToastService)
app.use(ConfirmationService);

app.component('Card', Card)
app.component('Button', Button)
app.component('InputText', InputText)
app.component('InputNumber', InputNumber)
app.component('Divider', Divider)
app.component('Password', Password)
app.component('Toast', Toast)
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('Toolbar', Toolbar)
app.component('FileUpload', FileUpload)
app.component('Calendar', Calendar)
app.component('Checkbox', Checkbox)
app.component('RadioButton', RadioButton)
app.component('Fieldset', Fieldset)
app.component('ProgressSpinner', ProgressSpinner)
app.component('ConfirmDialog', ConfirmDialog)
// ------------------------------ //

app.mixin(globalMixin)

app.mount('#app')
// ===================================================================== //
