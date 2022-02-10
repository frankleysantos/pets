import Axios from "axios"

export default {

    state: {
        especies: [],
        especie: []
    },

    mutations:{
       SHOW_ESPECIES(state, show_especies){
            state.especies = show_especies;
       },
       NOVO_CLIENTE(state, novo_especie){
        state.especies.push(novo_especie);  
       },
       GET_PACIENTE(state, show_paciente){
        state.paciente = show_paciente;
       },
    
       DEL_PACIENTE(state, id){
        let index = state.especies.findIndex(p => p.id == id)
        state.especies.splice(index, 1)
       },
    },

    actions:{
        storeEspecie(context, parametros){
            return Axios.post('especie/store', parametros)
                        .then(response => context.commit('NOVO_ESPECIES', response.data))
        },
        // editPaciente(context,id){
        //     return Axios.get('paciente/edit/'+id)
        //                 .then(response => context.commit('GET_PACIENTE',response.data));
        // },
        showEspecie(context){
            return Axios.get('especie/show/')
                        .then(response=> context.commit('SHOW_ESPECIES', response.data))
        },
        // updatePaciente(context, parametros){
        //     return Axios.post('/covid-19/public/paciente/update', parametros)
        //                 .then(response => {})
        // },
        // deletePaciente(context,id, state){
        //     return Axios.get('paciente/delete/'+id)
        //                 .then(() => context.commit('DEL_PACIENTE', id));
        // },
    },

    getters:{
       
    }
}