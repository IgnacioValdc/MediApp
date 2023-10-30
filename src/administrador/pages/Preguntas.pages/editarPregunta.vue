<template>
    <div>
      <h2>Editar Pregunta</h2>
      <form @submit.prevent="guardarEdicion">
        <div class="form-group">
          <label for="pregunta">Pregunta</label>
          <input type="text" id="pregunta" v-model="preguntaData.pregunta" class="form-control" />
        </div>
        <div class="form-group">
          <label for="opcion1">Opción 1</label>
          <input type="text" id="opcion1" v-model="preguntaData.opcion_1" class="form-control" />
        </div>
        <div class="form-group">
          <label for="opcion2">Opción 2</label>
          <input type="text" id="opcion2" v-model="preguntaData.opcion_2" class="form-control" />
        </div>
        <div class="form-group">
          <label for="opcion3">Opción 3</label>
          <input type="text" id="opcion3" v-model="preguntaData.opcion_3" class="form-control" />
        </div>
        <button type="submit" class="btn btn-primary">Guardar</button>
        <button @click="cancelarEdicion" class="btn btn-secondary">Cancelar</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import servidor from "../services/config";
  export default {
    props: {
      idPregunta: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        preguntaData: {
          pregunta: "",
          opcion_1: "",
          opcion_2: "",
          opcion_3: ""
        }
      };
    },
    mounted() {
      
      axios.get(`${servidor}/pregunta/${this.idPregunta}`)
        .then(response => {
          this.preguntaData = response.data.pregunta[0];
        })
        .catch(error => {
          console.error("Error al obtener los datos de la pregunta:", error);
        });
    },
    methods: {
      guardarEdicion() {
        
        axios.put(`${servidor}/preguntas/${this.idPregunta}`, this.preguntaData)
          .then((response) => {
            alert("Pregunta actualizada exitosamente");

            if (response.status === 200) {
                this.$router.push('/verpreguntas');
            }
            
          })
          .catch(error => {
            console.error("Error al actualizar la pregunta:", error);
          });
      },
      cancelarEdicion() {
          this.$router.push('/verpreguntas');
      }
    }
  };
  </script>