<template>
    <div class="center">
        <h1>Bienvenido</h1>
        <hr>
        <h2>{{ paciente.nombre }}</h2>
        <h2>Direccion: {{ paciente.ciudad }}</h2>
        <h2>Email: {{ paciente.email }}</h2>
        <hr>
    </div>
    <div class="container">
      
      <br>
      <div class="row">
          <button @click="atencion" class="btn btn-primary">Solicitar Atención</button>
      </div>
    </div>
  </template>
  
  <script>
import axios from 'axios';
import {servidorP} from '../services/config';

  export default {
    props:{
        id: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            paciente: {
                nombre: "",
                ciudad: "",
                email: ""
            }
        }
    },
    mounted() {
        this.datos();
    },
    methods: {
        datos() {
            axios
          .get(`${servidorP}${this.id}`)
          .then((response) => {
            this.paciente = response.data.paciente[0];
            // console.log(response.data.paciente[0])
          })
          .catch((error) => {
            console.error("Error al obtener los datos del paciente:", error);
          });
      },
      atencion(){
        this.$router.push({name: 'solicitaratencion', params: {id: this.id}});
      }
    },
  }
  </script>
  
  <style>
  
  </style>