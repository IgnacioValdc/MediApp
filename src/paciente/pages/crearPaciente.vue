<template>
    <div>
      <h1>Crear Nuevo Paciente</h1>
      <form @submit.prevent="crearPaciente">
        <div class="form-group">
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre" v-model="paciente.nombre" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="pass">Contraseña:</label>
          <input type="password" id="pass" v-model="paciente.pass" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="ciudad">Ciudad:</label>
          <input type="text" id="ciudad" v-model="paciente.ciudad" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="correo">Correo Electrónico:</label>
          <input type="email" id="correo" v-model="paciente.correo" class="form-control" required />
        </div>
        <button type="submit" class="btn btn-primary">Crear Paciente</button>
      </form>
    </div>
  </template>

<script>
import axios from 'axios';
import { servidorP } from '../services/config';
export default {
  data() {
    return {
      paciente: {
        nombre: "",
        pass: "",
        ciudad: "",
        correo: ""
      }
    };
  },
  methods: {
    crearPaciente() {
      axios.post(`${servidorP}crearPaciente`, this.paciente)
        .then(response => {
          alert("Paciente creado con exito")
          this.$router.push('/')
        })
        .catch(error => {
          console.error("Error al crear el paciente:", error);
        });
    }
  }
};
</script>