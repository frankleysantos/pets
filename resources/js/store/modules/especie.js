import Axios from "axios"

export default {

    state: {
        especies: {},
    },

    mutations:{
       SHOW_ESPECIES(state, show_especies){
        state.especies = show_especies;
       },
       NOVO_ESPECIE(state, novo_especie){
        state.especies.push(novo_especie);  
       },
    },

    actions:{
        especieSalvar(context, parametros){
            return Axios.post('especie/store', parametros)
                        .then(response => context.commit('NOVO_ESPECIE', response.data))
        },

        showEspecie(context){
            return Axios.get('especie/show/')
                        .then(response=> context.commit('SHOW_ESPECIES', response.data))
        },
    },
}