<template>
    <div>
        <h1>Escoja la opción deseada</h1>
    </div>
      <div class="container text-center">
        </div>
        <div class="my-5"></div> 
        <div class="container">
          <div class="row">
            <div class="col">
              <router-link to="listarprofesionales" class="btn btn-primary btn-custom">Ver profesionales</router-link>
            </div>
            <div class="col">
              <router-link to="crearprofesional" class="btn btn-primary btn-custom">Crear profesional</router-link>
            </div>
          </div>
        </div>
        <div>
            <router-link to="resumen" class="btn btn-secondary">Volver</router-link>
        </div>
    </template>
    
    <script>
    export default {
    
    }
    </script>
    
    <style>
    
    </style>