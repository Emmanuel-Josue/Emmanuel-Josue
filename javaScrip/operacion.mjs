"use strict";
/* -------------------------------- Importaciones ----------------------------------- */

export class Operaciones {
  #_objetoPregunta;
  #_contenedorImagen;
  #_indiceRespuesta;
  #_opcionesNumerosAleatorios;
  constructor( contenedorImagen,objetoPregunta) {
    this.#_objetoPregunta = objetoPregunta;
    this.#_contenedorImagen = contenedorImagen;

    this.crearPregunta();
    
  }

  crearPregunta(){
    this.establecerRutasAElementos(this.#_contenedorImagen, this.#_objetoPregunta);
    // De los cuatro números que se muestran se elije uno para que sea la respuesta
    this.#_indiceRespuesta = this.#numeroAleatorio(3);
    this.#_objetoPregunta.oAudio.crearOAudio(this.#_objetoPregunta.oAudio.audios[this.#_opcionesNumerosAleatorios[this.#_indiceRespuesta]]);
    // Es el string que se utiliza para inicializar el objeto audio de la libreria
    console.log(this.#_objetoPregunta.oAudio.audios[this.#_opcionesNumerosAleatorios[this.#_indiceRespuesta]]);
    
  
  }
  
  establecerRutasAElementos(contenedorImagen, objetoPregunta) {
    // El rango es el número actual que hay en el arreglo de las imagenes del objeto imagen
    this.#_opcionesNumerosAleatorios = this.#numerosAleatorios(objetoPregunta.oImagen.imagenes.length);
    console.log(this.#_opcionesNumerosAleatorios);
    //console.log(objetoPregunta.oImagen.imagen[]);
    
    contenedorImagen[0].src = objetoPregunta.oImagen.imagenes[this.#_opcionesNumerosAleatorios[0]];
    contenedorImagen[1].src = objetoPregunta.oImagen.imagenes[this.#_opcionesNumerosAleatorios[1]];
    contenedorImagen[2].src = objetoPregunta.oImagen.imagenes[this.#_opcionesNumerosAleatorios[2]];
    contenedorImagen[3].src = objetoPregunta.oImagen.imagenes[this.#_opcionesNumerosAleatorios[3]];
  }

  #numerosAleatorios(rango) {
    const numerosAleatorios = [];

    while (numerosAleatorios.length < 4) {
      const numeroAleatorio = Math.floor(Math.random() * (rango)); // Genera un número aleatorio dentro del rango especificado, no se cuenta el numero de rango que se le da, por los array

      if (!numerosAleatorios.includes(numeroAleatorio)) {
        numerosAleatorios.push(numeroAleatorio); // Agrega el número aleatorio al array si no está presente
      }
    }

    return numerosAleatorios;
  }

  #numeroAleatorio(rango){
    const numeroAleatorio = Math.floor(Math.random() * (rango + 1)); // Genera un número aleatorio dentro del rango
    return numeroAleatorio;
  }

  metodoParaActivarElObjeto(){
    console.log('Se activa el objeto operación ');
    
  }

  validadRespuesta(numeroImagenPrecionada){
    if (this.#_objetoPregunta.oImagen.imagenes[this.#_opcionesNumerosAleatorios[numeroImagenPrecionada]] === this.#_objetoPregunta.oImagen.imagenes[this.#_opcionesNumerosAleatorios[this.#_indiceRespuesta]]) {
      console.log('Tu respuesta fue correcta');
      
    }
    else{
      console.log('Fallaste');
      
    }
  }
}
