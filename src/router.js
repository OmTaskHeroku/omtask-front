import Vue from 'vue'
import Router from 'vue-router'
import RegistrationMain from './components/RegistrationMain.vue'
import LoginMain from './components/LoginMain.vue'
import HomeMain from './components/HomeMain.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes:[
        {path: '/Registration', component: RegistrationMain},
        {path: '/Login', component: LoginMain },
        {path: '/', component: HomeMain}
    ]
})