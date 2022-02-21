import Axios from "axios"

export default {

    state: {
        prontuario: [],
    },

    mutations:{
       SHOW_PRONTUARIO(state, show_prontuario){
        state.prontuario = show_prontuario;
       },
       NOVO_PRONTUARIO(state, NOVO_PRONTUARIO){
        state.prontuario.push(NOVO_PRONTUARIO);  
       },
    },

    actions:{
        createProntuario(context, parametros){
            return Axios.post('../../../prontuario/store', parametros)
                        .then(response => context.commit('NOVO_PRONTUARIO', response.data))
        },

        showProntuario(context){
            return Axios.get('prontuario/show/')
                        .then(response=> context.commit('SHOW_PRONTUARIO', response.data))
        },

        consultaHistorico(context, parametro) {
            return Axios.get('../../../prontuario/historico/'+parametro)
                        .then(response=> context.commit('SHOW_PRONTUARIO', response.data))
        }
    },
}