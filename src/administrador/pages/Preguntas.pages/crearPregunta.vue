<template>
    <div>
      <h2>Agregar Pregunta</h2>
      <form @submit.prevent="agregarPregunta">
        <div class="form-group">
          <label for="pregunta">Pregunta:</label>
          <input type="text" id="pregunta" v-model="pregunta" class="form-control" required>
        </div>
        <div class="form-group">
          <label for="opcion1">Opción 1:</label>
          <input type="text" id="opcion1" v-model="opcion1" class="form-control">
        </div>
        <div class="form-group">
          <label for="opcion2">Opción 2:</label>
          <input type="text" id="opcion2" v-model="opcion2" class="form-control">
        </div>
        <div class="form-group">
          <label for="opcion3">Opción 3:</label>
          <input type="text" id="opcion3" v-model="opcion3" class="form-control">
        </div>
        <button type="submit" class="btn btn-primary">Agregar Pregunta</button>
        <button class="btn btn-secondary" @click="volver">Volver</button>
      </form>
    </div>

    
    
  </template>
  
  <script>
  import axios from 'axios'
  import servidor from '../services/config';
  export default {
    
created() {
  // Accede a los datos de la pregunta utilizando this.$route.query
  this.preguntaData = this.$route.query;
},
    data() {
      return {
        pregunta: "",
        opcion1: "",
        opcion2: "",
        opcion3: "",
      };
    },
    methods: {
      async agregarPregunta() {
        const nuevaPregunta = {
          pregunta: this.pregunta,
          opcion_1: this.opcion1,
          opcion_2: this.opcion2,
          opcion_3: this.opcion3,
        };
  
        try {
          // Realiza la solicitud POST al servidor
          const response = await axios.post(`${servidor}/preguntas`, nuevaPregunta);
          
          // Maneja la respuesta del servidor según sea necesario
        //   console.log(response.data);
        alert('Pregunta creada de forma exitosa')
        if (response.status === 200) {
          this.$router.push('/resumen');
        }
        } catch (error) {
          // Maneja errores de la solicitud
          console.error("Error al agregar pregunta:", error);
        }
      },
      volver(){
        this.$router.push('/resumen');
      }
    },
  };
  </script>