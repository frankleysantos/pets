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
// Vue.use(PaginationPlugin);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import moment from 'moment';
Vue.prototype.moment = moment


import VueQuillEditor from 'vue-quill-editor'

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import Select2 from 'v-select2-component';

Vue.component('Select2', Select2);


Vue.use(VueQuillEditor, /* { default global options } */)

Vue.component('especie-component', require('./components/Especie/EspecieComponent.vue').default);
Vue.component('raca-component', require('./components/Raca/RacaComponent.vue').default);
Vue.component('cliente-component', require('./components/Cliente/ClienteComponent.vue').default);
Vue.component('pet-component', require('./components/Pet/PetComponent.vue').default);
Vue.component('basenav-component', require('./components/Widgets/Navbar/BaseNavComponent.vue').default);
Vue.component('sidebar-component', require('./components/Widgets/SideBar/SideBarComponent.vue').default);
Vue.component('agenda-component', require('./components/Agenda/AgendaComponent.vue').default);
Vue.component('pet-historico-component', require('./components/Pet/Historico/HistoricoComponent.vue').default);
Vue.component('pet-prontuario-component', require('./components/Pet/Prontuario/ProntuarioComponent.vue').default);

const app = new Vue({
    store,
    el: '#app',
});
