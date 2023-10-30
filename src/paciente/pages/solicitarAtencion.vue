<template>
    <div>
      <h1>Encuesta</h1>
      <form @submit.prevent="enviarRespuestas">
        <div v-for="pregunta in preguntas" :key="pregunta.idpregunta">
          <p>{{ pregunta.pregunta }}</p>
          <input type="radio" :id="'opcion1_' + pregunta.idpregunta" :value="1" v-model="respuestas[pregunta.idpregunta]" />
          <label :for="'opcion1_' + pregunta.idpregunta">{{ pregunta.opcion_1 }}</label>
          <br>
          <input type="radio" :id="'opcion2_' + pregunta.idpregunta" :value="2" v-model="respuestas[pregunta.idpregunta]" />
          <label :for="'opcion2_' + pregunta.idpregunta">{{ pregunta.opcion_2 }}</label>
          <br>
          <input type="radio" :id="'opcion3_' + pregunta.idpregunta" :value="3" v-model="respuestas[pregunta.idpregunta]" />
          <label :for="'opcion3_' + pregunta.idpregunta">{{ pregunta.opcion_3 }}</label>
          <br>
          <hr>
        </div>
        <button class="btn btn-primary" type="submit">Enviar Respuestas</button>
      </form>
    </div>
  </template>
  
  <script>
import axios from 'axios';
import {servidorA, servidorP} from '../services/config'
  export default {
    props: {
        id: {
            type: String,
            require: true
        }
    },
    data() {
      return {
        preguntas: [], 
        respuestas: {},
        rangos: {},
        asignar: {
            idprofesional: "",
            idpaciente: "",
            puntaje: ""
        }
        
      };
    },
    methods: {
      enviarRespuestas() {
        //Obtenemos los valores de las opciones seleccionadas y las sumamos
       const total = Object.values(this.respuestas).reduce((acumulador,valorActual) => acumulador + valorActual,0)  
        
       //Hacemos la peticion anidada para que de esta forma no ocurran errores porque una peticion termino antes que otra o similar
       //Obtenemos el rango al cual corresponde el puntaje obtenido
        axios.get(`${servidorP}rangos/${total}`).then((response) => {
            this.rangos = response.data.rangos
            //Los rangos son los siguientes:

            /**
             * rango 1 5 - 7
             * rango 2 8 -10
             * rango 3 11 - 13
             * rango 4 14 - 15
             */      

            axios.get(`${servidorA}profesional/rango/${this.rangos[0].idrango}`).then((response) => {
                this.asignar = {
                    idprofesional: response.data.profesional[0].idprofesional,
                    puntaje: total,
                    idpaciente: parseInt(this.id)
                }

                console.log(this.asignar)
                axios.post(`${servidorP}asignacionpaciente`,this.asignar).then((response) => {
                    alert('Registro creado con exito')
                
                    if (response.status === 200) {
                    this.$router.push('/');
            }
                })

        })
        })
        

      }
    },
    mounted() {
      
      axios.get(`${servidorA}preguntas/false`)
        .then((response) => {
          this.preguntas = response.data.preguntas;
      // Para que el puntaje nunca sea menor que 5 (rango minimo)
      //establecemos los radio de las opciones 1 en true o 1 
      this.preguntas.forEach((pregunta) => {
        this.$data.respuestas[pregunta.idpregunta] = "1"; 
      });
    })
        .catch((error) => {
          console.error('Error al obtener las preguntas:', error);
        });
    }
  };
  </script>
  
