import Axios from "axios"

export default {
    state: {
        correio: {},
    },

    mutations: {
        SHOW_CORREIO_ENDERECO(state, dados) {
            state.correio = dados;
        }
    },

    actions:{
        apiCorreiosEndereco(context, cep){
            let api = 'https://viacep.com.br/ws/'+cep+'/json/';
            console.log(api)
            return Axios.get(api)
                        .then(response=> context.commit('SHOW_CORREIO_ENDERECO', response.data));
        },
    },
}