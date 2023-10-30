<template>
    <div>
      <h2>Crear Profesional</h2>
      <form @submit.prevent="crearProfesional">
        <div class="form-group">
          <label for="nombre">Nombre</label>
          <input type="text" id="nombre" v-model="profesional.nombre" class="form-control" />
        </div>
        <div class="form-group">
          <label for="especialidad">Especialidad</label>
          <input type="text" id="especialidad" v-model="profesional.especialidad" class="form-control" />
        </div>
        <div class="form-group">
          <label for="rango">Rango</label>
          <input type="number" id="rango" v-model="profesional.rango" class="form-control" min="1" max="4" />
        </div>
        <button type="submit" class="btn btn-primary">Crear Profesional</button>
        <button @click="cancelar" class="btn btn-secondary">Volver</button>
      </form>
    </div>
  </template>

<script>
import axios from "axios";
import servidor from "../services/config";

export default {
  data() {
    return {
      profesional: {
        nombre: "",
        especialidad: "",
        rango: 1
      }
    };
  },
  methods: {
    crearProfesional() {
      axios
        .post(`${servidor}/crearProfesional`, this.profesional)
        .then(() => {
          alert("Profesional creado exitosamente");
          
          this.$router.push("/listarprofesionales");
        })
        .catch((error) => {
          console.error("Error al crear el profesional:", error);
        });
    },
    cancelar() {
        this.$router.push("/profesionales");
    }
  }
};
</script>