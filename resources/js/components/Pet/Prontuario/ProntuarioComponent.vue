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
                    <button align="right">Ultimas Visitas</button>
                </p>
            </blockquote>
            <figcaption class="blockquote-footer">
                <strong>Cliente:</strong> <cite title="Source Title">{{pet.cliente}}</cite>
            </figcaption>
            <figcaption class="blockquote-footer">
                <strong>Raça:</strong> <cite title="Source Title">{{pet.raca}}</cite>
            </figcaption>
        </figure>

        <b-form @submit.prevent="prontuarioCreate">
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
          insumo: [
            //   {
            //     "id": 1,
            //     "text": "Astrazenica",
            //   },
            //   {
            //     "id": 2,
            //     "text": "CoronaVac",
            //   },
            //   {
            //     "id": 3,
            //     "text": "Pfizer",
            //   },
          ],   
        },
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
      }
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