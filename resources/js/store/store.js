import Vue from 'vue'
import Vuex from 'vuex'

import cliente from './modules/cliente'
import pet from './modules/pet'
import especie from './modules/especie'
import agenda from './modules/agenda'
Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        cliente,
        pet,
        especie,
        agenda
    }
})

export default store