require('./bootstrap');

window.Vue = require('vue').default;

import Vue from 'vue';
import store from './store/store'
import VueTheMask from 'vue-the-mask';
Vue.use(VueTheMask);

import VueMask from 'v-mask';
Vue.use(VueMask);

import Snotify from 'vue-snotify'
Vue.use(Snotify)

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import moment from 'moment';
Vue.prototype.moment = moment

Vue.component('cliente-component', require('./components/Cliente/ClienteComponent.vue').default);
Vue.component('pet-component', require('./components/Pet/PetComponent.vue').default);
Vue.component('basenav-component', require('./components/Widgets/Navbar/BaseNavComponent.vue').default);
Vue.component('sidebar-component', require('./components/Widgets/SideBar/SideBarComponent.vue').default);
Vue.component('agenda-component', require('./components/Agenda/AgendaComponent.vue').default);

const app = new Vue({
    store,
    el: '#app',
});
