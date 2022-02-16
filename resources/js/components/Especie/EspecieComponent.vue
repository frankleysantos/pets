<template lang="">
    <div>
        <b-row class="form-group">
            <b-col md="12" class="d-flex justify-content-end">
                <b-form @submit.prevent="especieStoreUpdate">
                    <b-input-group prepend="Especie" class="mt-3">
                        <b-form-input v-model="especie.nome"></b-form-input>
                        <b-input-group-append>
                            <b-button variant="outline-success" type="submit">Salvar</b-button>
                        </b-input-group-append>
                    </b-input-group>
                </b-form>
            </b-col>
        </b-row>

        <b-row>
            <b-col>
                <b-form-group
                label-for="filter-input"
                class="mb-0"
                >
                <b-input-group size="sm">
                    <b-form-input
                    id="filter-input"
                    v-model="filter"
                    type="search"
                    placeholder="Filtrar por nome"
                    ></b-form-input>

                    <b-input-group-append>
                    <b-button :disabled="!filter" @click="filter = ''">Limpar</b-button>
                    </b-input-group-append>
                </b-input-group>
                </b-form-group>
            </b-col>
            <b-col md="4">
                <b-form-group
                label="Por página"
                label-for="per-page-select"
                label-cols-md="4"
                label-align-sm="right"
                label-size="sm"
                class="mb-0"
                >
                <b-form-select
                    id="per-page-select"
                    v-model="perPage"
                    :options="pageOptions"
                    size="sm"
                ></b-form-select>
                </b-form-group>
            </b-col>

            <b-col>
                <b-pagination
                v-model="currentPage"
                :total-rows="totalRows"
                :per-page="perPage"
                align="fill"
                size="sm"
                ></b-pagination>
            </b-col>
        </b-row>
    
    <b-table striped hover :items="itens" :fields="campos.especie" :current-page="currentPage" :per-page="perPage" :filter="filter"></b-table>
    </div>
</template>
<script>
export default {
    created() {
        this.especieShow();
    },
    data() {
        return {
            especie: {
                id: '',
                nome: '',
                // racas: {}
            },
            itens: [],
            filter: null,
            filterOn: [],
            totalRows: 0,
            currentPage: 1,
            perPage: 5,
            pageOptions: [5, 25, 50, { value: 100, text: "Mostrar Todos" }],
            campos: {
                especie:[
                    {
                        label: 'Nome',
                        key: 'nome',
                        sortable: true
                    }
                ]
            }
        }
    },
    methods: {
        especieStoreUpdate: function() {
            this.$store.dispatch('especieSalvar', this._data.especie)
                    .then(() => {
                        this.itens = this.$store.state.especie.especies
                    })
        },
        especieShow: function() {
            return this.$store.dispatch('showEspecie')
                        .then((resp) => {
                            this.itens = this.$store.state.especie.especies;
                            this.totalRows = this.itens.length;
                        })
        },
    },
}
</script>
<style lang="">
    
</style>