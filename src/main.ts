import './assets/bootstrap.min.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import CKEditor from '@ckeditor/ckeditor5-vue';

const app = createApp(App)

import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

const options = {
    // You can set your default options here
};

app.use(Toast, options);
app.use(createPinia())
app.use(router)
app.use( CKEditor )
app.mount('#app')

