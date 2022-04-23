import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './axios'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/src/jquery.js';
import 'bootstrap/dist/js/bootstrap.min.js';



new Vue({
    router,
    render: h => h(App),
}).$mount('#app')

