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
/* -------------------------------- Atributos de la clase ---------------------------- */
let oPregunta = new Pregunta();
let contenedorImagen = [imagenUno, imagenDos, imagenTres, imagenCuatro];
let oOperaciones = new Operaciones(contenedorImagen, oPregunta);

// Función crea y establece que nuemero se enviara en la función que valida la respuesta
function establecerNumeroAEnviar(numero) {
    return function () {
        oOperaciones.validadRespuesta(numero);
    }
}

//Creamos las funciones 
const enviarUno = establecerNumeroAEnviar(0);
const enviarDos = establecerNumeroAEnviar(1);
const enviarTres = establecerNumeroAEnviar(2);
const enviarCuatro = establecerNumeroAEnviar(3);


/* ---------------------------------- Eventos de acción ----------------------------------------- */

botonAudio.addEventListener("click", oPregunta.oAudio.reproducir);
imagenUno.addEventListener("click", enviarUno);
imagenDos.addEventListener("click", enviarDos);
imagenTres.addEventListener("click", enviarTres);
imagenCuatro.addEventListener("click", enviarCuatro);




