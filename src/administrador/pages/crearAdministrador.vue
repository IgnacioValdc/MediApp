<template>
    <div>
      <h2>Crear Administrador</h2>
      <form @submit="crearAdministrador">
        <div class="form-group">
          <label for="nombre">Nombre</label>
          <input type="text" id="nombre" v-model="nuevoAdmin.nombre" class="form-control" />
        </div>
        <div class="form-group">
          <label for="correo">Correo</label>
          <input type="email" id="correo" v-model="nuevoAdmin.correo" class="form-control" />
        </div>
        <div class="form-group">
          <label for="password">Contraseña</label>
          <input type="password" id="password" v-model="nuevoAdmin.password" class="form-control" />
        </div>
        <button type="submit" class="btn btn-primary">Crear Administrador</button>
        <button @click="cancelarCreacion" class="btn btn-secondary">Cancelar</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import servidor from "./services/config";
  export default {
    data() {
      return {
        nuevoAdmin: {
          nombre: "",
          correo: "",
          password: ""
        }
      };
    },
    methods: {
      crearAdministrador(event) {
        event.preventDefault();
        axios.post(`${servidor}/crear`, this.nuevoAdmin)
          .then((response) => {
            alert("Administrador creado exitosamente");

            if (response.status === 200) {
                this.$router.push('/administradores');
            }
          })
          .catch(error => {
            console.error("Error al crear el administrador:", error);
          });
      },
      cancelarCreacion() {
        this.$router.push('/administradores');
      }
    }
  };
  </script>
  
