import Axios from "axios"

export default {

    state: {
        racas: {},
    },

    mutations:{
       SHOW_RACAS(state, show_racas){
            state.racas = show_racas;
       },
       NOVO_RACA(state, novo_raca){
        state.racas.push(novo_raca);  
       },
       DEL_PACIENTE(state, id){
        let index = state.racas.findIndex(p => p.id == id)
        state.racas.splice(index, 1)
       },
    },

    actions:{
        storeRaca(context, parametros){
            return Axios.post('raca/store', parametros)
                        .then(response => context.commit('NOVO_RACA', response.data))
        },

        showRaca(context, parametros){
            return Axios.get('raca/show/'+parametros)
                        .then(response=> context.commit('SHOW_RACAS', response.data))
        },
    },

    getters:{
       
    }
}