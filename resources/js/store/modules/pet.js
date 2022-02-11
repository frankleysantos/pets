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
        if(novo_pet.update){
            var count = 0
            state.pets.map((item) => {
                if(item.pet_id == novo_pet.pet_id){
                    console.log(novo_pet );
                    state.pets[count].nome = novo_pet.nome;
                    state.pets[count].raca = novo_pet.raca;
                }
                count++;
            });
            
        }else{
            state.pets.push(novo_pet); 
        }
         
       },
    
       DELETE_PET(state, pet_id){
        let index = state.pets.findIndex(p => p.id == pet_id)
        state.pets.splice(index, 1)
       },
    },

    actions:{
        storePet(context, parametros){
            return Axios.post('pet/store', parametros)
                        .then(response => context.commit('NOVO_PET', response.data))
        },
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
        deletePet(context, pet_id){
            return Axios.get('pet/delete/'+pet_id)
                        .then(() => context.commit('DELETE_PET', pet_id));
        },
    },

    getters:{
       
    }
}