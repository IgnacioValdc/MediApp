<template>
    <div class="container text-center">
        <h1>Bienvenido</h1>
        <hr>
        <h2>Ingrese según su perfil</h2>
    </div>
    <div class="my-5"></div> 
    <div class="container">
      <div class="row">
        <div class="col">
          <router-link to="login" class="btn btn-primary btn-custom">Administrador</router-link>
        </div>
        <div class="col">
          <router-link to="loginpaciente" class="btn btn-primary btn-custom">Paciente</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style scoped> 
    .btn-custom {
      font-size: 24px; 
      padding: 20px 30px; 
    }
  </style>