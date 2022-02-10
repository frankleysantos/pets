import Axios from "axios"

export default {

    state: {
        racas: [],
        raca: []
    },

    mutations:{
       SHOW_RACAS(state, show_racas){
            state.racas = show_racas;
       },
       NOVO_CLIENTE(state, novo_raca){
        state.racas.push(novo_raca);  
       },
       GET_PACIENTE(state, show_paciente){
        state.paciente = show_paciente;
       },
    
       DEL_PACIENTE(state, id){
        let index = state.racas.findIndex(p => p.id == id)
        state.racas.splice(index, 1)
       },
    },

    actions:{
        storeRaca(context, parametros){
            return Axios.post('raca/store', parametros)
                        .then(response => context.commit('NOVO_RACAS', response.data))
        },
        // editPaciente(context,id){
        //     return Axios.get('paciente/edit/'+id)
        //                 .then(response => context.commit('GET_PACIENTE',response.data));
        // },
        showRaca(context, parametros){
            return Axios.get('raca/show/'+parametros)
                        .then(response=> context.commit('SHOW_RACAS', response.data))
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