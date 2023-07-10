'use strict';
/* -------------------------------- Importaciones ----------------------------------- */
import { Pregunta } from "./pregunta.mjs";
import { Operaciones } from "./operacion.mjs";

/* --------------------------------- conexión con html ------------------------------- */
const imagenUno = document.querySelector('li img');
const imagenDos = document.querySelector('li:nth-child(2) img');
const imagenTres = document.querySelector('li:nth-child(3) img');
const imagenCuatro = document.querySelector('li:nth-child(4) img');
const botonAudio = document.querySelector('.primary-button');
const vtnAcierto = document.querySelector(".ventanaAcierto");
const vtnError = document.querySelector(".ventanaError");
const btnPress = document.querySelector(".button-prees");
const btnSiguiente = document.querySelector(".btnSiguiente");

/* -------------------------------- Atributos de la clase ---------------------------- */
let oPregunta = new Pregunta();
let contenedorImagen = [imagenUno, imagenDos, imagenTres, imagenCuatro];
let oOperaciones = new Operaciones(contenedorImagen, oPregunta);

// Función crea y establece que nuemero se enviara en la función que valida la respuesta
function establecerNumeroAEnviar(numero) {
    return function () {
        oOperaciones.validacion(numero, vtnAcierto, vtnError, btnPress);
    }
}

//Creamos las funciones 
const enviarUno = establecerNumeroAEnviar(0);
const enviarDos = establecerNumeroAEnviar(1);
const enviarTres = establecerNumeroAEnviar(2);
const enviarCuatro = establecerNumeroAEnviar(3);

function llamarPregunta() {
    //Se cierra la ventana acierto y se habilita el boton para escuchar el audio 
    vtnAcierto.classList.add("inactivo");
    btnPress.classList.remove("inactivo");
    // Se crea una nueva pregunta
    oOperaciones.elegirModoDeCrearPregunta();
}


/* ---------------------------------- Eventos de acción ----------------------------------------- */

botonAudio.addEventListener("click", oPregunta.oAudio.reproducir);
imagenUno.addEventListener("click", enviarUno);
imagenDos.addEventListener("click", enviarDos);
imagenTres.addEventListener("click", enviarTres);
imagenCuatro.addEventListener("click", enviarCuatro);
btnSiguiente.addEventListener("click", llamarPregunta);




