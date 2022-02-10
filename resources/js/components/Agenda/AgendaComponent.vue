<template>
<div>
  <b-row>
    <b-col md="auto">
      <b-calendar v-model="data" locale="pt-BR" @context="agendaData"></b-calendar>
    </b-col>
    <b-col>
      <b-table striped hover :items="agendados" :fields="fields"></b-table>
    </b-col>
  </b-row>
</div>
</template>

<script>
import moment from 'moment';
  export default {
    
    data() {
      return {
        data: '',
        agendados: [],
        fields:[
            {
                label: 'Pet',
                key: "pet",
                sortable: true
            },
            {
                label: 'Serviço',
                key: "servico",
                sortable: true
            },
            {
                label: 'Hora',
                key: "hora",
                sortable: true
            },
            {
                label: 'Observação',
                key: "observacao",
                sortable: true
            },
        ],
      }
    },
    methods: {
        agendaData: function() {
          
          if(this.data == ''){
            this.data = moment().format('YYYY-MM-DD');
          }
          return this.$store.dispatch('showAgenda', this.data)
                      .then((e) => {
                        this.agendados = this.$store.state.agenda.agendados;
                      })
        }
    }
  }
</script>