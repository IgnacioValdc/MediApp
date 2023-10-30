import {createRouter, createWebHashHistory} from 'vue-router'
import Login from '../administrador/pages/Login';
import Inicio from '../components/Inicio.component'
import resumen from '../administrador/pages/resumen'
import resumenAtencion from '../administrador/pages/resumenAtencion'
import profesionales from '../administrador/pages/Profesionales.pages/profesionales'
import preguntas from '../administrador/pages/Preguntas.pages/preguntas'
import administradores from '../administrador/pages/administradores'
import verpreguntas from '../administrador/pages/Preguntas.pages/listarPreguntas'
import crearpregunta from '../administrador/pages/Preguntas.pages/crearPregunta'
import editarpregunta from '../administrador/pages/Preguntas.pages/editarPregunta'
import crearadministrador from '../administrador/pages/crearAdministrador'
import listaradministradores from '../administrador/pages/listarAdministradores'
import listarprofesionales from '../administrador/pages/Profesionales.pages/listarProfesionales'
import editarprofesional from '../administrador/pages/Profesionales.pages/editarProfesional'
import crearProfesional from '../administrador/pages/Profesionales.pages/crearProfesional'

// =============================================================================================\\
//===========================================Paciente===========================================\\
// =============================================================================================\\

import loginpaciente from '../paciente/pages/loginPaciente'
import resumenpaciente from '../paciente/pages/resumenPaciente'
import datospersonales from '../paciente/pages/datosPersonales'
import solicitaratencion from '../paciente/pages/solicitarAtencion'
import crearpaciente from '../paciente/pages/crearPaciente'

/**
 * La idea era que las rutas quedaran con sus respectivas rutas padres he hijas, segun correspondiera. Sin embargo,
 * errores continuos llevaron a que se optara por la forma que se ve
 */

const routes = [
    { path: '/', component: Inicio},
    { path: '/login', component: Login},
    { path: '/resumen',component: resumen},
    { path: '/atencion',component: resumenAtencion},
    { path: '/profesionales',component: profesionales},
    { path: '/preguntas',component: preguntas},
    { path: '/administradores',component: administradores},
    { path: '/verpreguntas', component: verpreguntas},
    { path: '/crearpregunta', component: crearpregunta},
    { path: '/editarpregunta/:idPregunta', name: 'editarpregunta', component: editarpregunta, props: true},
    { path: '/crearadministrador', component: crearadministrador},
    { path: '/listaradministradores', component: listaradministradores},
    { path: '/listarprofesionales', component: listarprofesionales},
    { path: '/editarprofesional/:id', name: 'editarprofesional', component: editarprofesional, props: true },
    { path: '/crearprofesional', component: crearProfesional},


    // ============================================================================================== \\
    // ====================================Paciente=====================================================\\
    // ============================================================================================== \\

    { path: '/loginpaciente', component: loginpaciente},
    { path: '/resumenpaciente/:id', name: 'resumenpaciente', component: resumenpaciente, props: true},
    { path: '/datospersonales/:id', name: 'datospersonales', component: datospersonales, props: true},
    { path: '/solicitaratencion/:id', name: 'solicitaratencion', component: solicitaratencion, props: true},
    { path: '/crearpaciente', component: crearpaciente}
  ]

const router = createRouter({

    history: createWebHashHistory(),
    routes,
  })

export default router