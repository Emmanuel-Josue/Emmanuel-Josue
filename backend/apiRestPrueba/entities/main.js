/*

    NO UTILIZARÉ ESTE ARCHIVO POR EL MOMENTO !!

*/

'use strict';
/* -------------------------------- Importaciones ----------------------------------- */
const Pregunta = require("./pregunta.js");
const Operaciones = require("./operacion.js");

/* --------------------------------- conexión con html ------------------------------- */
const imagenUno = document.querySelector('#img1');
const imagenDos = document.querySelector('#img2');
const imagenTres = document.querySelector('#img3');
const imagenCuatro = document.querySelector('#img4');
const vtnAcierto = document.querySelector('#hWindow');
const vtnError = document.querySelector('#eWindow');
const btnPress = document.querySelector('#btnAudio');
const btnSiguiente = document.querySelector('#nextBtn');
const btnRepetir = document.querySelector('#repeatBtn');
const btnSalir = document.querySelectorAll('#exitBtn');
const vtnFinal = document.querySelector('#endWindow');
const btnReiniciar = document.querySelector('#restartBtn');
/* -------------------------------- Atributos de la clase ---------------------------- */
let oPregunta = new Pregunta();// Esto debe suceder en el backend
let contenedorImagen = [imagenUno, imagenDos, imagenTres, imagenCuatro];// Debo de enviar el array con el que va a trabajar el backend
let oOperaciones = new Operaciones(contenedorImagen, oPregunta);// Cuando se crea el objeto se crea la primera pregunta // Esto también bede de suceder en el backend

//Le brindamos la ventana que mostrara al terminar la practica
oOperaciones.ventanaFinal = vtnFinal;
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
    vtnAcierto.classList.add("inactive");
    btnPress.classList.remove("inactive");
    // Se crea una nueva pregunta
    oOperaciones.elegirModoDeCrearPregunta();
}

function repetir(){
    btnPress.classList.remove('inactive');
    oOperaciones.cerrarVentana(vtnError);
}
function salir(){
    history.back();
}
function recargar(){
    location.reload(true);
}


/* ---------------------------------- Eventos de acción ----------------------------------------- */

btnPress.addEventListener("click", oPregunta.oAudio.reproducir);
imagenUno.addEventListener("click", enviarUno);
imagenDos.addEventListener("click", enviarDos);
imagenTres.addEventListener("click", enviarTres);
imagenCuatro.addEventListener("click", enviarCuatro);
btnSiguiente.addEventListener("click", llamarPregunta);
btnRepetir.addEventListener("click", repetir);
btnSalir[0].addEventListener("click", salir);
btnSalir[1].addEventListener("click", salir);
btnReiniciar.addEventListener("click", recargar);




