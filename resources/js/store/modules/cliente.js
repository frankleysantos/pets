import Axios from "axios"

export default {

    state: {
        clientes: {},
        cliente: []
    },

    mutations:{
       SHOW_CLIENTES(state, show_clientes){
            state.clientes = show_clientes;
       },
       NOVO_CLIENTE(state, novo_cliente){
        state.clientes.push(novo_cliente);  
       },
       GET_PACIENTE(state, show_paciente){
        state.paciente = show_paciente;
       },
    
       DEL_PACIENTE(state, id){
        let index = state.clientes.findIndex(p => p.id == id)
        state.clientes.splice(index, 1)
       },
    },

    actions:{
        storeCliente(context, parametros){
            return Axios.post('cliente/store', parametros)
                        .then(response => response.data)
        },
        // editPaciente(context,id){
        //     return Axios.get('paciente/edit/'+id)
        //                 .then(response => context.commit('GET_PACIENTE',response.data));
        // },
        showCliente(context, parametro){
            return Axios.post('cliente/show', parametro)
                        .then(response=> context.commit('SHOW_CLIENTES', response.data))
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