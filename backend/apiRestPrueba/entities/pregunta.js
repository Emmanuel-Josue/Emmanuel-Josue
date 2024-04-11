'use strict';
/* ------------------------------------------------ Inport ------------------------------------------------------ */

const Imagen = require("./imagen.js");
const AudioR = require("./audio.js");

class Pregunta{
    #_imagenRespuesta;
    #_audioRespuesta;
    constructor(){
        this.#_audioRespuesta = new AudioR();
        this.#_imagenRespuesta = new Imagen();
    }

    get oImagen(){
        return this.#_imagenRespuesta;
    }
    get oAudio(){
        return this.#_audioRespuesta;
    }

}

module.exports = Pregunta;
