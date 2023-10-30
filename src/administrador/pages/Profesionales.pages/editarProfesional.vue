<template>
    <div>
      <h2>Editar Profesional</h2>
      <form @submit.prevent="guardarCambios">
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
          <input type="number" id="rango" v-model="profesional.idrango" class="form-control" min="1" max="4" />
        </div>
        <button type="submit" class="btn btn-primary">Guardar Cambios</button>
        <button @click="volverAListarProfesionales" class="btn btn-secondary">Volver a Listar Profesionales</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import servidor from "../services/config";
  
  export default {
    props: {
      id: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        profesional: {
          idprofesional: "",
          nombre: "",
          especialidad: "",
          idrango: ""
        }
      };
    },
    mounted() {
      this.obtenerProfesionalPorNumero();
    },
    methods: {
      obtenerProfesionalPorNumero() {
        axios
          .get(`${servidor}/profesional/${this.id}`)
          .then((response) => {
            this.profesional = response.data.profesional[0];
            console.log(response.data.profesional[0])
          })
          .catch((error) => {
            console.error("Error al obtener los datos del profesional:", error);
          });
      },
      guardarCambios() {
        
        axios
          .put(`${servidor}/profesional/${this.id}`, this.profesional)
          .then(() => {
            alert("Cambios guardados exitosamente");
            
            this.$router.push("/listarprofesionales");
          })
          .catch((error) => {
            console.error("Error al guardar los cambios:", error);
          });
      },
      volverAListarProfesionales() {
        
        this.$router.push("/listarprofesionales");
      }
    }
  };
  </script>