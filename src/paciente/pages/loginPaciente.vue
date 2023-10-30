<template>
    <div>
      <h2>Iniciar sesión</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" class="form-control" required>
        </div>
        <div class="form-group">
          <label for="password">Contraseña:</label>
          <input type="password" id="password" v-model="password" class="form-control" required>
        </div>
        <br>
        <button type="submit" class="btn btn-primary">Iniciar sesión</button>
      </form>
    </div>
    <br>
    <div>
        <span>No tienes cuenta?</span>
        <br>
        <button @click="registrar" class="btn btn-success" >Registrate aquí</button>
    </div>
  </template>
  
  <script>
    import axios from 'axios'
    import {servidorP} from '../services/config'
    // import { useRouter } from 'vue-router';
  export default {
    data() {
      return {
        email: "",
        password: ""
      };
    },
    methods: {
      async login(){
        try{
            const response = await axios.post(`${servidorP}/loginpaciente`,{
                correo: this.email,
                password: this.password
            });
            console.log(response)
            if(response.data.authenticated){
                this.$router.push({name: 'resumenpaciente', params: {id: response.data.idpaciente}});
            }else{
                alert("Usuario y/o contraseña incorrectos")
            }
        }
        catch(error){
            console.error("Error de inicio de sesion:", error)
            alert("Usuario y/o contraseña incorrectos")
        }
      },
      registrar() {
        this.$router.push('/crearpaciente')
      }
    }
  };
  </script>
  
  <style>
  /* Agrega estilos CSS personalizados aquí si es necesario */
  </style>