<template>
    <div>
      <h2>Lista de Preguntas</h2>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>ID Pregunta</th>
            <th>Pregunta</th>
            <th>Opción 1</th>
            <th>Opción 2</th>
            <th>Opción 3</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="pregunta in preguntas" :key="pregunta.idpregunta">
            <td>{{ pregunta.idpregunta }}</td>
            <td>{{ pregunta.pregunta }}</td>
            <td>{{ pregunta.opcion_1 }}</td>
            <td>{{ pregunta.opcion_2 }}</td>
            <td>{{ pregunta.opcion_3 }}</td>
            <td>
              <button class="btn btn-primary" @click="editarPregunta(pregunta)">Editar</button>
              <button class="btn btn-danger" @click="eliminarPregunta(pregunta.idpregunta)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <button @click="cancelar" class="btn btn-secondary">Volver</button>
  </template>
  
  <script>
  import axios from "axios";
  import servidor from '../services/config';
  export default {
    data() {
      return {
        preguntas: [],
      };
    },
    created() {
      this.obtenerPreguntas(true);
    },
    methods: {
      obtenerPreguntas(activo) {
        const endpoint = `${servidor}/preguntas/true`;
        axios
          .get(endpoint)
          .then((response) => {
            this.preguntas = response.data.preguntas;
          })
          .catch((error) => {
            console.error("Error al obtener las preguntas:", error);
          });
      },
      editarPregunta(pregunta){
        this.$router.push({name: 'editarpregunta', params: {idPregunta: pregunta.idpregunta}})
      },
      cancelar() {
        this.$router.push("/preguntas");
      },
      eliminarPregunta(idPregunta) {
        const endpoint = `${servidor}/preguntas/${idPregunta}`;
        axios
          .delete(endpoint)
          .then(() => {
            alert("La pregunta a sido eliminada exitosamente")
            this.obtenerPreguntas(true);
          })
          .catch((error) => {
            console.error("Error al eliminar la pregunta:", error);
          });
      },
    },
  };
  </script>