'use strict';
/* ------------------------------------------------ Inport ------------------------------------------------------ */
import { Imagen } from "./imagen.mjs";
import { AudioR } from "./audio.mjs";


export class Pregunta{
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