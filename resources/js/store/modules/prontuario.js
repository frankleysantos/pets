import Axios from "axios"

export default {

    state: {
        prontuario: [],
    },

    mutations:{
       SHOW_PRONTUARIO(state, SHOW_PRONTUARIO){
        state.prontuario = SHOW_PRONTUARIO;
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
    },
}