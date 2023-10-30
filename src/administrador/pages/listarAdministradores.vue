<template>
    <div>
      <h2>Lista de Administradores</h2>
      <table class="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="admin in administradores" :key="admin.id">
            <td>{{ admin.nombre }}</td>
            <td>{{ admin.email }}</td>
          </tr>
        </tbody>
      </table>
      <button class="btn btn-secondary" @click="volver">Volver</button>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import servidor from "./services/config";
  export default {
    data() {
      return {
        administradores: []
      };
    },
    created() {
      
      axios.get(`${servidor}/listaradmin`)
        .then(response => {
          this.administradores = response.data.admin;
        })
        .catch(error => {
          console.error("Error al obtener la lista de administradores:", error);
        });
    },
    methods: {
        volver(){
            this.$router.push('/administradores')
        }
    }
  };
  </script>  
  
  
  
  
  