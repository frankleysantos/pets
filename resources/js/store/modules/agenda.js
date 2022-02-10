import Axios from "axios"

export default {

    state: {
        agendados: {},
        agendado: []
    },

    mutations:{
       SHOW_AGENDADOS(state, show_agendados){
            state.agendados = show_agendados;
       },
       NOVO_AGENDADO(state, novo_cliente){
        state.agendados.push(novo_cliente);  
       },
       UPDATE_AGENDADO(state, agenda) {
        //    console.log(agenda.agenda_id);
           let index = state.agendados.findIndex(ag => ag.id == agenda.agenda_id)
           if(index == -1) {
               var count = 0
               state.agendados.map((item) => {
                if(item.agenda_id === agenda.agenda_id){
                    state.agendados[count].status = agenda.status;
                }
                count++;
               })
           }
       }
    },

    actions:{
        storeAgenda(context, parametros){
            return Axios.post('agenda/store', parametros)
                        .then(response => response.data)
        },
        // editPaciente(context,id){
        //     return Axios.get('paciente/edit/'+id)
        //                 .then(response => context.commit('GET_PACIENTE',response.data));
        // },
        showAgenda(context, parametro){
            return Axios.get('agenda/show/'+parametro)
                        .then(response=> context.commit('SHOW_AGENDADOS', response.data))
        },
        showAgendamentosPet(context, parametro){
            return Axios.get('agenda/pet/'+parametro)
                        .then(response=> context.commit('SHOW_AGENDADOS', response.data))
        },
        alterarStatusAgenda(context, parametros){
            return Axios.post('agenda/update/status', parametros)
                        .then(response => context.commit('UPDATE_AGENDADO', response.data))
        },
        // deletePaciente(context,id, state){
        //     return Axios.get('paciente/delete/'+id)
        //                 .then(() => context.commit('DEL_PACIENTE', id));
        // },
    },

    getters:{
       
    }
}