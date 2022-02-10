import Axios from "axios"

export default {

    state: {
        pets: [],
        pet: [],
        racas: [],
        servicos: [],
    },

    mutations:{
       SHOW_PETS(state, show_pets){
            state.pets = show_pets;
       },
       SHOW_RACAS(state, show_racas){
        state.racas = show_racas;
       },
       SHOW_SERVICOS(state, show_servicos){
        state.servicos = show_servicos;
       },
       NOVO_PET(state, novo_pet){
        state.pets.push(novo_pet);  
       },
       GET_PACIENTE(state, show_paciente){
        state.paciente = show_paciente;
       },
    
       DEL_PACIENTE(state, id){
        let index = state.pets.findIndex(p => p.id == id)
        state.pets.splice(index, 1)
       },
    },

    actions:{
        storePet(context, parametros){
            return Axios.post('pet/store', parametros)
                        .then(response => context.commit('NOVO_PET', response.data))
        },
        // editPaciente(context,id){
        //     return Axios.get('paciente/edit/'+id)
        //                 .then(response => context.commit('GET_PACIENTE',response.data));
        // },
        showPet(context, parametros){
            return Axios.get('pet/show/'+parametros)
                        .then(response=> context.commit('SHOW_PETS', response.data))
        },
        showRaca(context, parametros){
            return Axios.get('raca/show/'+parametros)
                        .then(response=> context.commit('SHOW_RACAS', response.data))
        },
        showServico(context){
            return Axios.get('servico/show/')
                        .then(response=> context.commit('SHOW_SERVICOS', response.data))
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