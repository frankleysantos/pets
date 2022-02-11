<template>
    <div>
        <vue-snotify></vue-snotify>
        <div class="row form-group">
                <div class="col-md d-flex justify-content-end">
                    <b-form  @submit.prevent="consultaCliente" type="POST">
                        <b-input-group prepend="Telefone" class="mt-3">
                            <b-form-input v-mask="'(##) #####-####'" v-model="cliente.telefone" :state="validarTelefone"></b-form-input>
                            <b-button type="submit" squared variant="success" class="d-none">
                                Consultar
                            </b-button>
                        </b-input-group>
                    </b-form>
                </div>
        </div>
        <div v-if="!formCreateUpdate">
            <b-alert variant="warning" show>Digite o telefone do cliente para iniciar o atendimento.</b-alert>
            <!-- <b-card-img src="assets/img/paciente.png" width="100px" height="320px"></b-card-img> -->
            <agenda-component></agenda-component>
        </div>
        <b-card no-body v-if="(formCreateUpdate) && (cliente.telefone != '')">
            <b-tabs card>
                <b-tab title="Dados Cliente" active>
                    <b-card-text>
                        <b-form  @submit.prevent="cadastroCliente" type="POST">
                            <b-form-input v-model="cliente.id" class="d-none"></b-form-input>
                            <div class="row form-group">
                                <div class="col-md-5">
                                    <b-input-group prepend="Nome Cliente" class="mt-3">
                                        <b-form-input v-model="cliente.nome" :state="validarNome"></b-form-input>
                                    </b-input-group>
                                    <b-form-invalid-feedback :state="validarNome">
                                        O nome deve conter minimo 4 de caracteres.
                                    </b-form-invalid-feedback>
                                </div>
                                <div class="col-md">
                                    <b-input-group prepend="Email" class="mt-3">
                                        <b-form-input type="email" v-model="cliente.email" :state="validarEmail"></b-form-input>
                                    </b-input-group>
                                    <b-form-invalid-feedback :state="validarEmail">
                                        Insira um email valido
                                    </b-form-invalid-feedback>
                                </div>
                                <div class="col-md">
                                    <b-input-group prepend="Telefone" class="mt-3">
                                        <b-form-input v-mask="'(##) #####-####'" v-model="cliente.telefone" :state="validarTelefone" readonly></b-form-input>
                                    </b-input-group>
                                    <b-form-invalid-feedback :state="validarTelefone">
                                        Insira um telefone valido
                                    </b-form-invalid-feedback>
                                </div>
                            </div>

                            <div class="row form-group">
                                <div class="col-md-5">
                                    <b-input-group prepend="EndereÃÂ§o" class="mt-3">
                                        <b-form-input v-model="cliente.rua" :state="validarRua"></b-form-input>
                                    </b-input-group>
                                    <b-form-invalid-feedback :state="validarRua">
                                        O Rua deve conter minimo 4 de caracteres.
                                    </b-form-invalid-feedback>
                                </div>
                                <div class="col-md">
                                    <b-input-group prepend="Bairro" class="mt-3">
                                        <b-form-input v-model="cliente.bairro" :state="validarBairro"></b-form-input>
                                    </b-input-group>
                                    <b-form-invalid-feedback :state="validarBairro">
                                        Insira um Bairro valido
                                    </b-form-invalid-feedback>
                                </div>
                            </div>

                            <div class="row form-group">
                                <div class="col-md">
                                    <b-input-group prepend="Cidade" class="mt-3">
                                        <b-form-input v-model="cliente.cidade" :state="validarCidade"></b-form-input>
                                    </b-input-group>
                                    <b-form-invalid-feedback :state="validarCidade">
                                        Insira um Cidade valido
                                    </b-form-invalid-feedback>
                                </div>
                                <div class="col-md">
                                    <b-input-group prepend="Estado" class="mt-3">
                                        <b-form-select v-model="cliente.estado" :options="options"></b-form-select>
                                    </b-input-group>
                                    <b-form-invalid-feedback :state="validarEstado">
                                        Selecione o Estado
                                    </b-form-invalid-feedback>
                                </div>
                                <div class="col-md">
                                    <b-input-group prepend="CEP" class="mt-3">
                                        <b-form-input v-model="cliente.cep" :state="validarCep" v-mask="'##.###-###'"></b-form-input>
                                    </b-input-group>
                                    <b-form-invalid-feedback :state="validarCep">
                                        Insira o CEP
                                    </b-form-invalid-feedback>
                                </div>
                            </div>
                            
                            <div class="row">
                                <div class="col-md d-flex justify-content-end">
                                    <b-button type="submit" squared variant="success">
                                    Salvar
                                </b-button>
                                </div>
                            </div>
                        </b-form>
                    </b-card-text>
                </b-tab>
                <b-tab title="Dados Pet" v-if="componentePet">
                    <b-card-text>
                        <pet-component :cliente_id='cliente.id'></pet-component>
                    </b-card-text>
                </b-tab>
                <b-tab title="Todos os Agendamentos">
                    <b-card-text>
                        <agenda-component></agenda-component>
                    </b-card-text>
                </b-tab>
            </b-tabs>
        </b-card>
        
    </div>
</template>
<script>
import AgendaComponent from '../Agenda/AgendaComponent.vue';


export default {
  components: { AgendaComponent },
    created() {
        this.resetCliente
    },
    data() {
        return {
            componentePet: false,
            cliente: {
                id: '',
                nome: '',
                rua: '',
                bairro: '',
                cep: '',
                cidade: '',
                estado: null,
                email: '',
                telefone: ''
            },
            options: [
                { value: null, text: 'Selecione o estado', disabled: true},
                { value: 'AC', text: 'Acre' },
                { value: 'AL', text: 'Alagoas' },
                { value: 'AP', text: 'AmapÃÂ¡' },
                { value: 'AM', text: 'Amazonas' },
                { value: 'BA', text: 'Bahia' },
                { value: 'CE', text: 'Ceara' },
                { value: 'DF', text: 'Distrito Federal' },
                { value: 'ES', text: 'EspÃÂ­rito Santo	' },
                { value: 'GO', text: 'GoiÃÂ¡s' },
                { value: 'MA', text: 'MaranhÃÂ£o' },
                { value: 'MT', text: 'Mato Grosso	' },
                { value: 'MS', text: 'Mato Grosso do Sul	' },
                { value: 'MG', text: 'Minas Gerais' },
                { value: 'PA', text: 'ParÃÂ¡' },
                { value: 'PB', text: 'ParaÃÂ­ba' },
                { value: 'PR', text: 'ParanÃÂ¡' },
            ],
            formCreateUpdate: false,
        }
    },
    methods: {
        cadastroCliente: function(){
            if(!this.validarNome || !this.validarEmail || !this.validarTelefone) {
                return;
            }
           this.loading = true;
           this.$store.dispatch('storeCliente', this._data.cliente)
                        .then((response) => {
                            this.cliente.id = response['id']; 
                            if(this.cliente.nome){
                                this.componentePet = true;
                            }                      
                        })
                        .finally(() => {
                            this.$snotify.success('Atualização realizada com sucesso');
                        });
        },
        consultaCliente: function() {
            this.componentePet = false;
            this.resetCliente
            this.$store.dispatch('showCliente', this._data.cliente)
                        .then((e) => {
                            this.formCreateUpdate = true;
                            let telefone = this.cliente.telefone;
                            this.cliente = this.$store.state.cliente.clientes;
                            if(!this.cliente.telefone){
                                this.cliente.telefone = telefone;
                            }
                            if(this.cliente.nome){
                                this.componentePet = true;
                            }
                            if(!this.cliente.estado){
                                this.cliente.estado = null
                            }
                        })
                        .finally(() => {
                            
                        })
        },
    },
    computed: {
      validarNome() {
          if(this.cliente.nome != null)
            return this.cliente.nome.length >= 4;
          return false;
      },
      validarEmail() {
          if(this.cliente.email != null)
            return this.cliente.email.length >= 5;
         return false;
      },
      validarTelefone() {
          if (this.cliente.telefone != null && this.cliente.telefone.length >= 15) {
              return this.cliente.telefone.length >= 15;
          }
         return false;
      },
      validarRua() {
          if(this.cliente.rua != null)
            return this.cliente.rua.length >= 4
          return false;
      },
      validarCidade() {
          if(this.cliente.cidade != null)
            return this.cliente.cidade.length >= 2;
          return false;
      },
      validarBairro() {
          if(this.cliente.bairro != null)
            return this.cliente.bairro.length >= 2;
          return false;
      },
      validarEstado() {
          let estado = this.cliente.estado;
          if(estado != null){
              return true;
          }
          return false;
      },
      validarCep() {
          if(this.cliente.cep != undefined)
           return this.cliente.cep.length >= 8;
          return false;
      },
      resetCliente() {
            this.cliente.nome = '';
            this.cliente.rua= '';
            this.cliente.bairro= '';
            this.cliente.cep= '';
            this.cliente.cidade= '';
            this.cliente.estado= null;
            this.cliente.email= '';
      }
    },
}
</script>
<style lang="">
    
</style>