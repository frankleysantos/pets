import Vue from 'vue'
import Vuex from 'vuex'

import cliente from './modules/cliente'
import pet from './modules/pet'
import especie from './modules/especie'
import agenda from './modules/agenda'
import correio from './modules/correio'
import raca from './modules/raca'
import prontuario from './modules/prontuario'
import insumo from './modules/insumo'
Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        cliente,
        pet,
        especie,
        agenda,
        correio,
        raca,
        prontuario,
        insumo
    }
})

export default store