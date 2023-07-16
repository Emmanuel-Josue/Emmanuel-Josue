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
            'https://i.imgur.com/iXnmSas.png',
            'https://i.imgur.com/IHGE467.png',
            'https://i.imgur.com/0ftbb5y.png',
            'https://i.imgur.com/BXwahbv.png',
            'https://i.imgur.com/6S7Ancd.png',
            'https://i.imgur.com/xtEH8RO.png',
            'https://i.imgur.com/EHjWsEg.png',
            'https://i.imgur.com/9O1MZe1.png'           

        ];
    }

    get imagenes(){
        return this.#_imagenes;
    }

}