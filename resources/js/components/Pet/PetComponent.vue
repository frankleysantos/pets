<template lang="">
    <div>
    <vue-snotify></vue-snotify>
    <div class="row form-group">
        <div class="col-md d-flex justify-content-end">
            <b-button @click="sidebarCadastroPet" variant="info"><b-icon icon="plus-square"></b-icon></b-button>
        </div>
    </div>
    
    <b-sidebar id="sidebar-pet-cadastro" :title="!form.pet.update ? 'Cadastrar Dados Pet' : 'Atualizar Dados Pet' " right shadow>
      <div class="px-3 py-2">
        <b-form  @submit.prevent="cadastroPets" type="POST">
            <div class="row form-group">
                <div class="col-md">
                    <b-form-input v-model="pets.id" class="d-none"></b-form-input>
                    <b-input-group prepend="Nome" class="mt-3">
                        <b-form-input v-model="pets.nome" :state="validarNome" placeholder="Nome do Pet"></b-form-input>
                    </b-input-group>
                    <b-form-invalid-feedback :state="validarNome">
                        O nome deve conter minimo 4 de caracteres.
                    </b-form-invalid-feedback>
                </div>
            </div> 

            <div class="row form-group">
                <div class="col-md">
                    <b-input-group prepend="Especie" class="mt-3">
                        <b-form-select v-model="pets.especie" :options="options.especie" @change="buscaRaca" :state="validarEspecie"></b-form-select>
                    </b-input-group>
                    <b-form-invalid-feedback :state="validarEspecie">
                        Selecione uma especie
                    </b-form-invalid-feedback>
                </div>
            </div> 

            <div class="row form-group" v-if="mostraRaca">
                <div class="col-md">
                    <b-input-group prepend="Raça" class="mt-3">
                        <b-form-select v-model="pets.raca" :options="options.raca" :state="validarRaca"></b-form-select>
                    </b-input-group>
                    <b-form-invalid-feedback :state="validarRaca">
                        Selecionar Raça.
                    </b-form-invalid-feedback>
                    <b-form-input v-model="pets.cliente_id" class="d-none"></b-form-input>
                </div>
            </div> 

            <div class="row form-group">
                <div class="col-md d-flex justify-content-end">
                    <b-button type="submit" squared variant="success" :disabled="!mostraRaca">
                        {{!form.pet.update ? 'Salvar' : 'Atualizar'}}
                    </b-button>  
                </div>
            </div>                         
        </b-form>
      </div>
    </b-sidebar>

        <b-table striped hover :items="pet" :fields="fields">
            <template #cell(pet_id)="row">
                <b-dropdown variant="primary">
                    <template #button-content>
                        <b-icon icon="gear-fill" aria-hidden="true"></b-icon> Ações
                    </template>
                    <b-dropdown-item-button variant="info" @click="agendamentoModal(row.item.pet_id, row.item.nome)">
                        <b-icon icon="calendar2-date-fill" aria-hidden="true"></b-icon>
                        Agendar
                    </b-dropdown-item-button>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item-button variant="success" @click="ultimoAgendamentoModal(row.item.pet_id, row.item.nome)">
                        <b-icon icon="calendar3" aria-hidden="true"></b-icon>
                        Ultimos Agendamentos
                    </b-dropdown-item-button>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item-button variant="info" @click="editPet(row.item.pet_id, row.item.nome, row.item.especie_id, row.item.raca_id)">
                        <b-icon icon="pencil-square" aria-hidden="true"></b-icon>
                        Alterar
                    </b-dropdown-item-button>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item-button variant="danger" @click="deletePet(row.item.pet_id)">
                        <b-icon icon="trash" aria-hidden="true"></b-icon>
                        Deletar
                    </b-dropdown-item-button>
                </b-dropdown>
            </template>
        </b-table>

        <!-- modal de agendamento -->
        <b-modal ref="my-modal-novo-agendamento" hide-footer title="Agendando o Pet">
            <b-form  @submit.prevent="agendamento" type="POST">
                <b-form-input v-model="agenda.pet_id" placeholder="Nome do Pet" class="d-none"></b-form-input>
                <div class="row">
                    <div class="col-md">
                        <!-- <b-input-group prepend="Nome" class="mt-3"> -->
                            <!-- <b-form-input v-model="agenda.pet" placeholder="Nome do Pet"></b-form-input> -->
                            <b-alert show variant="secondary" align="center">{{ agenda.pet }}</b-alert>
                        <!-- </b-input-group> -->
                    </div>
                </div> 

                <div class="row form-group">
                    <div class="col-md">
                        <b-input-group prepend="Servicos" class="mt-3">
                            <b-form-select v-model="agenda.servico_id" :options="options.servicos" :state="validarServico"></b-form-select>
                        </b-input-group>
                        <b-form-invalid-feedback :state="validarServico">
                            Selecione um tipo de serviço
                        </b-form-invalid-feedback>
                    </div>
                </div> 
                <div class="row form-group">
                    <div class="col-md">
                        <b-form-input v-model="agenda.data"  type="date" :state="validarData"></b-form-input>
                        <b-form-invalid-feedback :state="validarData">
                            Insira a data do agendamento
                        </b-form-invalid-feedback>
                    </div>
                    <div class="col-md">
                        <b-form-input v-model="agenda.hora"  type="time" :state="validarHora"></b-form-input>
                        <b-form-invalid-feedback :state="validarHora">
                            Insira o horario do agendamento
                        </b-form-invalid-feedback>
                    </div>
                </div>

                <div class="row form-group">
                    <div class="col-md">
                        <b-form-textarea
                            id="textarea"
                            v-model="agenda.observacao"
                            placeholder="Insira alguma Observação"
                            rows="3"
                        ></b-form-textarea>
                    </div>
                </div>

                <div class="row form-group">
                    <div class="col-md d-flex justify-content-end">
                        <b-button type="submit" squared variant="success" :disabled="!saveAgendamento">
                            Salvar
                        </b-button>  
                    </div>
                </div>                         
            </b-form>
        </b-modal>

        <!-- modal de ultimos agendamentos do pet -->
        <b-modal ref="my-modal-ultimos-agendamento" hide-footer title="Ultimos agendamentos do Pet" size="lg">
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
            <b-table striped hover :items="tableUlitmoAgendamento" :fields="fieldsUlitmoAgendamento" :current-page="currentPage" :per-page="perPage" :filter="filter">
                <template #cell(data)="row">
                    <b class="text-info" v-if="
                        moment(row.item.data).format('DD') == moment().format('DD')
                        && moment(row.item.data).format('MM') == moment().format('MM')
                        && moment(row.item.data).format('YYYY') == moment().format('YYYY')
                    ">
                            {{ moment(row.item.data).format('DD/MM/YYYY') }}
                    </b>
                    <b class="text-danger" v-else-if="
                        moment(row.item.data).format('DD') < moment().format('DD')
                        && moment(row.item.data).format('MM') <= moment().format('MM')
                        && moment(row.item.data).format('YYYY') <= moment().format('YYYY')
                        || moment(row.item.data).format('YYYY') < moment().format('YYYY')
                    ">
                        {{ moment(row.item.data).format('DD/MM/YYYY') }}
                    </b>  
                    <b class="text-dark" v-else-if="
                        moment(row.item.data).format('DD') > moment().format('DD')
                        && moment(row.item.data).format('MM') >= moment().format('MM')
                        && moment(row.item.data).format('YYYY') >= moment().format('YYYY')
                    ">
                        {{ moment(row.item.data).format('DD/MM/YYYY') }}</b>           
                </template>

                <template #cell(agenda_id)="row">
                    <b-button variant="success" size="sm" @click="alterarStatus(row.item.agenda_id, 'atendido')" title="Confirmar Atendimento"><b-icon icon="check-square"></b-icon></b-button>
                    <b-button variant="danger" size="sm" @click="alterarStatus(row.item.agenda_id, 'cancelado')" title="Cancelar Atendimento"><b-icon icon="x-circle"></b-icon></b-button>
                    <b-button variant="warning" size="sm" @click="alterarStatus(row.item.agenda_id, 'faltante')" title="Não compareceu"><b-icon icon="exclamation-triangle-fill"></b-icon></b-button>
                </template>

                <template #cell(status)="row">
                    <b class="text-info" v-if="row.item.status == 'agendado'">
                        {{row.item.status}}
                    </b>
                    <b class="text-success" v-if="row.item.status == 'atendido'">
                        {{row.item.status}}
                    </b>
                    <b class="text-danger" v-else-if="row.item.status == 'cancelado'">
                        {{row.item.status}}
                    </b>
                    <b class="text-warning" v-else-if="row.item.status == 'faltante'">
                        {{row.item.status}}
                    </b>
                </template>
            </b-table>
            <!-- {{agenda}} -->
        </b-modal>
    </div>
</template>
<script>
import moment from 'moment';
export default {
    components: { moment },
    created() {
        this.pets.cliente_id = this.cliente_id;
        this.consultaPets();
        this.consultaEspecies();
        this.consultaServicos();
    },
    data() {
        return {
            form: {
                pet: {
                    update: false
                }
            },
            acoes: {
                delete: false
            },
            saveAgendamento: false,
            mostraRaca: false,
            agenda: {
                pet_id: '',
                pet: '',
                servico_id: null,
                hora: null,
                data: null,
                observacao: null
            },
            pets: {
                id: null,
                cliente_id: '',
                nome: '',
                raca: null,
                especie: null
            },
            fields:[
                {
                    label: 'Nome do Cachorro',
                    key: "nome",
                    sortable: true
                },
                {
                    label: 'Raça',
                    key: "raca",
                    sortable: true
                },
                {
                    label: 'Ações',
                    key: 'pet_id'
                },
            ],
            fieldsUlitmoAgendamento: [
                {
                    label: 'Pet',
                    key: "pet",
                    sortable: true
                },
                {
                    label: 'Data',
                    key: "data",
                    sortable: true
                },
                {
                    label: 'Hora',
                    key: "hora",
                    sortable: true
                },
                {
                    label: 'Serviços',
                    key: "servico",
                    sortable: true
                },
                {
                    label: 'Ações',
                    key: "agenda_id",
                    sortable: true
                },
                {
                    label: 'Status',
                    key: "status",
                    sortable: true
                },
            ],
            tableUlitmoAgendamento: [],
            filter: null,
            filterOn: [],
            totalRows: 0,
            currentPage: 1,
            perPage: 5,
            pageOptions: [5, 25, 50, { value: 100, text: "Mostrar Todos" }],
            pet: [],
            options: {
                raca: [],
                especie: [
                    { value: null, text: 'Selecione a especie...', disabled: true  },
                ],
                servicos: [
                    { value: null, text: 'Selecione a especie...', disabled: true  },
                ],
            }
        }
    },
    methods: {
        sidebarCadastroPet: function () {
            this.form.pet.update = false;
            this.pets.id = null,
            this.pets.nome= '',
            this.pets.raca= null,
            this.pets.especie= null
            this.$root.$emit('bv::toggle::collapse', 'sidebar-pet-cadastro')
        },
        cadastroPets: function() {
            if(!this.validarNome || !this.validarEspecie || !this.validarRaca) {
                return ;
            }
            this.$store.dispatch('storePet', this._data.pets)
                        .then(()=> {

                        })
        },
        consultaPets: function() {
            return this.$store.dispatch('showPet', this.pets.cliente_id)
                        .then(() => {
                            this.pet = this.$store.state.pet.pets;
                        })
        },
        consultaEspecies: function() {
            return this.$store.dispatch('showEspecie')
                        .then(() => {
                            let especies = this.$store.state.especie.especies;
                            var vm = this;
                            $.each(especies ,function(key, dados){
                                vm.options.especie.push({ value: dados.id, text: dados.nome })
                            })
                        })
        },
        consultaServicos: function() {
            this.options.servicos.splice(0);
            this.options.servicos.push({ value: null, text: 'Selecione o servico...', disabled: true })
            return this.$store.dispatch('showServico')
                        .then(() => {
                            let servicos = this.$store.state.pet.servicos;

                            var vm = this;
                            $.each(servicos ,function(key, dados){
                                vm.options.servicos.push({ value: dados.id, text: dados.nome })
                            })
                        })
        },
        buscaRaca: function () {
            this.mostraRaca = false;
            this.options.raca.splice(0);
            this.options.raca.push({ value: null, text: 'Selecione a raca...', disabled: true  })
            return this.$store.dispatch('showRaca', this.pets.especie)
                            .then(() => {
                                let racas = this.$store.state.pet.racas;
                                var vm = this;
                                $.each(racas ,function(key, dados){
                                    vm.options.raca.push({ value: dados.id, text: dados.nome })
                                })
                                if(racas[0]){
                                    this.mostraRaca = true;
                                }
                                
                            })
                               
        },
        agendamentoModal: function(pet_id, pet) {
            this.agenda.pet_id = pet_id;
            this.agenda.pet = pet;
            this.agenda.hora = null;
            this.agenda.data = null;
            this.agenda.servico_id = null;
            this.agenda.observacao = null;
            this.$refs['my-modal-novo-agendamento'].show();
            this.saveAgendamento = false;
        },
        agendamento: function() {
            if(!this.validarData || !this.validarHora || !this.validarServico) {
                return ;
            }
            
            this.$store.dispatch('storeAgenda', this._data.agenda)
                .then(() => {
                    this.$refs['my-modal-novo-agendamento'].hide();
                })
        },
        ultimoAgendamentoModal: function(pet_id) {
            this.ultimosAgendamentos(pet_id)
            this.$refs['my-modal-ultimos-agendamento'].show();
        },
        ultimosAgendamentos: function (pet_id) {
            return this.$store.dispatch('showAgendamentosPet', pet_id)
                .then(() => {
                    this.tableUlitmoAgendamento = this.$store.state.agenda.agendados;
                    this.totalRows = this.tableUlitmoAgendamento.length;
                })
                .finally(() => {
                    if(this.tableUlitmoAgendamento.length == 0) {
                        this.acoes.delete = true;
                    }
                })
        },
        alterarStatus: function(agenda_id, status) {
            let conf = {
                    'agenda_id': agenda_id,
                    'status': status
                }
            
            this.$store.dispatch('alterarStatusAgenda', conf)
                    .then(() => {
                        switch (status) {
                            case 'agendado':
                                this.$snotify.info('Aguardando atendimento');
                                break;
                            case 'atendido':
                                this.$snotify.success('Status alterado para atendido');
                                break;

                            case 'cancelado':
                                this.$snotify.error('Status alterado para cancelado');
                                break;

                            case 'faltante':
                                this.$snotify.warning('Status alterado para faltante');
                                break;
                        
                            default:
                                break;
                        }
                    })
        },
        editPet: function(pet_id, pet, especie_id, raca_id) {
            this.form.pet.update = true;
            this.pets.id = pet_id;
            this.pets.nome = pet;
            this.pets.especie = especie_id;
            this.buscaRaca()
            this.pets.raca = raca_id;
            this.$root.$emit('bv::toggle::collapse', 'sidebar-pet-cadastro')
        },
        deletePet: function(pet_id) {
            var vm = this;
            vm.$snotify.error('VocÃÂª irÃÂ¡ excluir o pet e os agendamentos vinculados a ele. Deseja continuar?', 'ExclusÃÂ£o do Pet', {
                timeout: 10000,
                showProgressBar: true,
                pauseOnHover: true,
                buttons: [
                    {text: 'Yes', action: (toast) => {
                        vm.$store.dispatch('deletePet', pet_id)
                        .then(() => {
                            this.$snotify.error('Removido com sucesso');
                        })
                        vm.$snotify.remove(toast.id)
                    }, bold: true},
                    {text: 'NÃÂ£o', action: (toast) => {vm.$snotify.remove(toast.id);}, bold: true},
                ],
            });
        }
    },
    computed: {
        validarNome() {
          if (this.pets.nome != "")
            return this.pets.nome.length >= 2;
          return false;
        },
        validarEspecie() {
            return this.pets.especie != null
        },
        validarRaca() {
            return this.pets.raca != null
        },
        validarServico() {
            if(this.agenda.servico_id != null && this.agenda.data != null && this.agenda.hora != null){
                this.saveAgendamento = true;
            }
            return this.agenda.servico_id != null
        },
        validarData() {
            if(this.agenda.servico_id != null && this.agenda.data != null && this.agenda.hora != null){
                this.saveAgendamento = true;
            }
            return this.agenda.data != null
        },
        validarHora() {
            if(this.agenda.servico_id != null && this.agenda.data != null && this.agenda.hora != null){
                this.saveAgendamento = true;
            }
            return this.agenda.hora != null
        }
    },
    props: ['cliente_id'],
}
</script>
<style lang="">

</style>