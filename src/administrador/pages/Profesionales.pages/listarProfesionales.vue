<template>
  <div>
    <h2>Lista de Profesionales</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th>Especialidad</th>
          <th>Ubicación</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="profesional in profesionales" :key="profesional.id">
          <td>{{ profesional.idprofesional }}</td>
          <td>{{ profesional.nombre }}</td>
          <td>{{ profesional.especialidad }}</td>
          <td>{{ profesional.rango }}</td>
          <td>
            <button @click="editarProfesional(profesional.idprofesional)" class="btn btn-primary">Actualizar</button>
            <button @click="eliminarProfesional(profesional.idprofesional)" class="btn btn-danger">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
    <button @click="irAProfesionales" class="btn btn-primary">Ir a Profesionales</button>
  </div>
</template>

<script>
import axios from "axios";
import servidor from "../services/config";

export default {
  data() {
    return {
      profesionales: []
    };
  },
  mounted() {
    this.obtenerProfesionales();
  },
  methods: {
    obtenerProfesionales() {
      axios
        .get(`${servidor}/profesionales/true`)
        .then((response) => {
          this.profesionales = response.data.profesionales;
        })
        .catch((error) => {
          console.error("Error al obtener la lista de profesionales:", error);
        });
    },
    irAProfesionales() {
      this.$router.push("/profesionales");
    },
    editarProfesional(id) {
      this.$router.push({name: 'editarprofesional', params: {id: id}})
    },
    eliminarProfesional(id) {
      
      if (confirm(`¿Seguro que deseas eliminar al profesional con ID ${id}?`)) {
        axios
          .delete(`${servidor}/profesional/${id}`)
          .then(() => {
            alert(`Profesional con ID ${id} eliminado exitosamente`);
            
            this.obtenerProfesionales();
          })
          .catch((error) => {
            console.error(`Error al eliminar al profesional con ID ${id}:`, error);
          });
      }
    }
  }
};
</script>