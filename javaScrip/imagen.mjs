'use strict';
export class Imagen{

    //Atributos globales 
    #_imagenes;

    constructor(){
        //Llenamos el arreglo con las imagenes 
        this.#listaImagenes();
    }

    #listaImagenes(){
        this.#_imagenes = [
            '../recursos/imagenes/imagenesVerbosRegulares/1 open.png',
            '../recursos/imagenes/imagenesVerbosRegulares/2 accept.png',
            '../recursos/imagenes/imagenesVerbosRegulares/3 love.png',
            '../recursos/imagenes/imagenesVerbosRegulares/4 learn.png',
            '../recursos/imagenes/imagenesVerbosRegulares/5 hurry.png',
            '../recursos/imagenes/imagenesVerbosRegulares/6 dare.png',
            '../recursos/imagenes/imagenesVerbosRegulares/7 help.png',
            '../recursos/imagenes/imagenesVerbosRegulares/8 dance.png',
            '../recursos/imagenes/imagenesVerbosRegulares/9 erase.png'

        ];
    }

    get imagenes(){
        return this.#_imagenes;
    }

}