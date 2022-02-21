<template lang="">
    <div>
        <vue-snotify></vue-snotify>
        <figure>
            
            <blockquote class="blockquote">
                <p>
                    <small class="text-muted">
                        <strong>Pet:</strong> {{pet.nome}} 
                    </small> / 
                    <small class="text-muted">
                        <strong>Nascimento</strong>: 12/04/2021
                    </small> 
                      <b-button id="show-btn" @click="consultaProntuarioHistorico">Historicos</b-button>
                </p>
            </blockquote>
            <figcaption class="blockquote-footer">
                <strong>Cliente:</strong> <cite title="Source Title">{{pet.cliente}}</cite>
            </figcaption>
            <figcaption class="blockquote-footer">
                <strong>Raça:</strong> <cite title="Source Title">{{pet.raca}}</cite>
            </figcaption>
        </figure>

        <b-form @submit.prevent="notificacao">
        <b-row class="form-group">
            <b-col>
                <b-card bg-variant="light">
                    <b-form-input v-model="prontuario.prontuario_id" class="d-none"></b-form-input>
                    <b-form-input v-model="prontuario.agenda_id" class="d-none"></b-form-input>
                     <!-- <b-form-select v-model="selected.insumos" :options="options.vacina"></b-form-select> -->
                      <Select2 v-model="selected.insumos" 
                        :options="options.insumo" @select="selecinarInsumo($event)" 
                        :settings="{ multiple: true, placeholder: 'Selecione os Insumos'}"
                    />
                    <!-- <h4>Value: {{ selected.insumos }}</h4> -->
                     <!-- <button @click="addVacina">Add</button> -->
                </b-card>
            </b-col>
        </b-row>

        <b-row class="form-group">
            <b-col>
                <!-- Or manually control the data synchronization -->
                <quill-editor
                    :content="content"
                    :options="editorOption"
                    @change="onEditorChange($event)"
                ></quill-editor>
            </b-col>
        </b-row>

        <b-row class="form-group save">
            <b-col class="d-flex justify-content-end">
                <b-button variant="outline-success" type="submit">Salvar</b-button>
            </b-col>
        </b-row>
        
        </b-form>


        <b-modal ref="bv-modal-prontuario-historico" hide-footer size="xl">
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
                <b-col>
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
                        >
                        </b-pagination>
                </b-col>
            </b-row>
            <b-table striped hover :items="historico" :fields="fields" :current-page="currentPage" :per-page="perPage" :filter="filter">
                <template #cell(descricao)="row">
                    <div class="mb-3">
                      <label for="" class="form-label"></label>
                        <textarea class="form-control" name="" id="" rows="3" disabled>{{row.item.descricao}}</textarea>
                    </div>
                </template>
                <template #cell(created_at)="row">
                    {{moment(row.item.created_at).format('DD/MM/YYYY H:mm')}}
                </template>
            </b-table>
        </b-modal>
    </div>
</template>
<script>

export default {
    created() {
            this.prontuario.pet_id = this.pet_id;
            this.prontuario.agenda_id = this.agenda_id;
            this.consultarInsumos();
            this.consultarInfoPet();
    },
    data () {
      return {
        pet: {},
        prontuario: {
            prontuario_id: null,
            insumos: [],
            text: null,
            html: null,
            pet_id: null,
            agenda_id: null
        },     
        content: null,
        editorOption: {
          // Some Quill options...
        },
        selected: {
            insumos: []
        },
        options: {
          insumo: [],   
        },
        historico: [],
        filter: null,
        filterOn: [],
        totalRows: 0,
        currentPage: 1,
        perPage: 2,
        pageOptions: [2, 10, 20, { value: 100, text: "Mostrar Todos" }],
        fields:[
            {
                label: 'Descrição',
                key: "descricao",
                sortable: true
            },
            {
                label: 'Data/Hora',
                key: "created_at",
                sortable: true
            },
            
        ],
      }
    },
    methods: {
      onEditorChange({ quill, html, text }) {
        this.prontuario.text = text
        this.prontuario.html = html
      },
      prontuarioCreate: function() {
          var infoProntuario =  this.prontuario.insumos;
          this.prontuario.insumos = this.selected.insumos;
          
          this.$store.dispatch('createProntuario', this.prontuario)
                        .then(() => {
                            let prontuario = this.$store.state.prontuario.prontuario;
                            // console.log(prontuario);
                            this.prontuario.prontuario_id = prontuario[0].prontuario_id;
                            this.prontuario.insumos = infoProntuario;
                            this.$snotify.info('Dados Salvos com sucesso');
                        });
      },
      selecinarInsumo({id, text}){
        var vm = this;
        let select = vm.selected.insumos.length;
        let insumos = vm.prontuario.insumos;
        var compare = [];   

        if(select < insumos.length) {
            insumos.forEach(function (element, index, array) {
                console.log(vm.selected.insumos.indexOf(element.id));
                if(vm.selected.insumos.indexOf(element.id) != -1){
                    compare.push(element)
                }
            });
            insumos = [];
            insumos = compare;
            
        }else{
            insumos.push({'id': id, 'text': text})
        }

        var conteudo = vm.content != null ? vm.content : '';
        var html = '';

        insumos.forEach(function (element, index, array) {

            if(conteudo != element) {
                conteudo = element.text
                html = 
                        "<h2 class='html-content'>"+
                            "*"+conteudo+
                        "</h2>"+
                        html;
            }                
        });
        vm.content = "<h1><strong>Medicamentos Prescritos para o Pet:</strong><h1>"+
                        html;
      },
      consultarInsumos: function() {
          return this.$store.dispatch('consultaInsumos')
                    .then(() => {
                        var itens = [];
                        let insumos = this.$store.state.insumo.insumo;
                        insumos.forEach((item) => {
                            itens.push({'id': item.insumo_id, 'text': item.catInsumo+' - '+item.nomeInsumo})
                        })
                        this.options.insumo = itens;
                    })
      },
      consultarInfoPet: function() {
          return this.$store.dispatch('petInfo', this.pet_id)
                    .then(() => {
                        this.pet = this.$store.state.pet.pets;
                    })
      },
      consultaProntuarioHistorico: function() {
          this.$store.dispatch('consultaHistorico', this.prontuario.pet_id)
                    .then(() => {
                        this.historico = this.$store.state.prontuario.prontuario;
                        console.log(this.historico);
                        this.totalRows = this.historico.length;
                        this.$refs['bv-modal-prontuario-historico'].show();
                    })
      },
      notificacao: function () {
          var vm = this;
          vm.$snotify.warning('Ao clicar em sim irá finalizar o atendimento. Deseja pŕosseguir?', 'Finalizar', {
            timeout: 5000,
            showProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            centerBottom:"centerBottom",
            buttons: [
                {text: 'Yes', action: (toast) => {
                    vm.prontuarioCreate();
                    vm.$snotify.remove(toast.id);
                    window.location.href ='/pets/public/home'
                }, bold: false},
                {text: 'Não', action: (toast) => {console.log('Clicked: No'); vm.$snotify.remove(toast.id); }, bold: true},
            ]
          });
                
      },
    },

    props: ['pet_id', 'agenda_id']
}
</script>
<style lang="scss" scoped>
    .quill-editor {
      height: 250px;
    //   overflow-y: auto;
    }
    .save {
        padding-top: 70px;
    }
</style>