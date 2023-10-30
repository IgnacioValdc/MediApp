<template>
    <div>
      <h1>Lista de Pacientes</h1>
      <table class="table">
        <thead>
          <tr>
            <th>Nombre del Paciente</th>
            <th>Nombre del Profesional</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="paciente in pacientes" :key="paciente.nombrepaciente">
            <td>{{ paciente.nombrepaciente }}</td>
            <td>{{ paciente.nombreprofesional }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
        <router-link to="resumen" class="btn btn-secondary">Volver</router-link>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import servidor from './services/config';
  
  export default {
    data() {
      return {
        pacientes: [],
      };
    },
    mounted() {
      
      axios.get(`${servidor}/pacientes`)
        .then((response) => {
          
          this.pacientes = response.data.pacientes;
        })
        .catch((error) => {
          console.error('Error al obtener la lista de pacientes:', error);
        });
    },
  };
  </script>