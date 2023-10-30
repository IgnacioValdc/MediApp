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
        <button type="submit" class="btn btn-primary">Iniciar sesión</button>
      </form>
    </div>
  </template>
  
  <script>
    import axios from 'axios'
    
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
            const response = await axios.post('http://localhost:8081/api/admin/login',{
                correo: this.email,
                password: this.password
            });

            if(response.data.authenticated){
                this.$router.push('/resumen');
            }else{
                alert("Usuario y/o contraseña incorrectos")
            }
        }
        catch(error){
            console.error("Error de inicio de sesion:", error)
        }
      }
    }
  };
  </script>
  
  <style>
  /* Agrega estilos CSS personalizados aquí si es necesario */
  </style>