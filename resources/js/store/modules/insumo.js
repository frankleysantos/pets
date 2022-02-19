import Axios from "axios"

export default {

    state: {
        insumo: [],
    },

    mutations:{
       SHOW_INSUMO(state, show_insumo){
        state.insumo = show_insumo;
       },
    },

    actions:{
        consultaInsumos(context){
            return Axios.get('/pets/public/insumo/show/')
                        .then(response=> context.commit('SHOW_INSUMO', response.data))
        },
    },
}