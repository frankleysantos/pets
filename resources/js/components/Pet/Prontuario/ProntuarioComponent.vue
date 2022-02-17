<template lang="">
    <div>
        <b-form @submit.prevent="prontuarioCreate">
        <b-row class="form-group">
            <b-col>
                <b-card bg-variant="light">
                     <b-form-select v-model="selected.vacina" :options="options.vacina"></b-form-select>
                     <button @click="addVacina">Add</button>
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
    data () {
      return {
        prontuario: {
            vacina: [],
            text: null,
            html: null
        },     
        content: null,
        editorOption: {
          // Some Quill options...
        },
        selected: {
            vacina: null
        },
        options: {
          vacina: [
                { value: null, text: 'Please select an option' },
                { value: 'a', text: 'This is First option' },
                { value: 'b', text: 'Selected Option' },
          ]
        }
      }
    },
    methods: {
      onEditorChange({ quill, html, text }) {
        this.prontuario.text = text
        this.prontuario.html = html
      },
      prontuarioCreate: function() {
          console.log(this._data.prontuario);
      },
      addVacina: function() {
          this.prontuario.vacina.push(this.selected.vacina)
          console.log(this.prontuario.vacina)
      }
    },

    props: ['pet_id']
}
</script>
<style lang="scss" scoped>
    .quill-editor {
      height: 200px;
      overflow-y: auto;
    }
    .save {
        padding-top: 70px;
    }
</style>