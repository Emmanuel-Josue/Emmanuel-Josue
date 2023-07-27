"use strict";
import { Pregunta } from "./pregunta.mjs";
/* -------------------------------- Importaciones ----------------------------------- */

export class Operaciones {
  #_objetoPregunta;
  #_contenedorImagen;
  #_indiceRespuesta;
  #_opcionesNumerosAleatorios;
  #_intentosFinales;
  #_ventanaFinal;
  constructor(contenedorImagen, objetoPregunta) {
    this.#_objetoPregunta = objetoPregunta;
    this.#_contenedorImagen = contenedorImagen;
    this.crearPregunta();
  }

  crearPregunta() {
    // El rango es el número actual que hay en el arreglo de las imagenes del objeto imagen 
    this.#numerosAleatorios(this.#_objetoPregunta.oImagen.imagenes.length);
    this.#establecerRutasAElementos(this.#_contenedorImagen, this.#_objetoPregunta.oImagen.imagenes, this.#_opcionesNumerosAleatorios);
    // De los cuatro números que se muestran se elije uno para que sea la respuesta
    this.#_indiceRespuesta = this.#numeroAleatorio(3);
    this.#_objetoPregunta.oAudio.crearOAudio(this.#_objetoPregunta.oAudio.audios[this.#_opcionesNumerosAleatorios[this.#_indiceRespuesta]]);
  }
  crearPreguntaAdicionandoElementos(indiceImagen) {
    const preguntaParaRelleno = new Pregunta();
    //Buscamos la posición del elemento que es identico al elemento que será la respuesta, para que no aparesca una imagen duplicada
    let indice = preguntaParaRelleno.oImagen.imagenes.indexOf(this.#_objetoPregunta.oImagen.imagenes[indiceImagen]);
    //borramos en ambos arreglo del objeto nuevo la dirección o cadena que será la respuesta
    this.#borrarElemento(indice, preguntaParaRelleno.oAudio.audios, preguntaParaRelleno.oImagen.imagenes);
    // Para tener un rango nuevamente amplio se utiliza el largo del objeto que servira de apoyo proporcionando más imagenes
    this.#numerosAleatorios(preguntaParaRelleno.oImagen.imagenes.length);

    // Creamos el arreglo  temporal 
    this.#_intentosFinales = this.#crearArregloTemporal(this.#_opcionesNumerosAleatorios, preguntaParaRelleno);

    // Contenedor en donde se colocara la imagen respuesta
    this.#_indiceRespuesta = this.#numeroAleatorio(3);

    //Intercambiamos un elemento aleatorio por la imagen respuesta. 
    this.#colocarImagenRespuesta(this.#_objetoPregunta.oImagen.imagenes[indiceImagen], this.#_intentosFinales, this.#_indiceRespuesta);


    this.#establecerRutasAElementos(this.#_contenedorImagen, this.#_intentosFinales, [0, 1, 2, 3]);
    // En el audio se coloca el número "indiceImagen" para hacer referencia al numero del audio (posición), es el ultimo número que hay 
    // en ambos arreglos 2, 1, 0 
    this.#_objetoPregunta.oAudio.crearOAudio(this.#_objetoPregunta.oAudio.audios[indiceImagen]);
  }
  #establecerRutasAElementos(contenedorImagen, arregloImagenes, aPosicion) {
    contenedorImagen[0].src = arregloImagenes[aPosicion[0]];
    contenedorImagen[1].src = arregloImagenes[aPosicion[1]];
    contenedorImagen[2].src = arregloImagenes[aPosicion[2]];
    contenedorImagen[3].src = arregloImagenes[aPosicion[3]];
  }
  set ventanaFinal(elemento) {
    this.#_ventanaFinal = elemento;
  }
  elegirModoDeCrearPregunta() {

    if (this.#_objetoPregunta.oImagen.imagenes.length > 3) {
      this.crearPregunta();
    }
    else if (this.#_objetoPregunta.oImagen.imagenes.length <= 3 && this.#_objetoPregunta.oImagen.imagenes.length > 0) {
      //Indice que ayudara a encontrar el string que se debe de eliminar en el arreglo de apoyo. 
      let indiceImagenAColocar = (this.#_objetoPregunta.oImagen.imagenes.length - 1);
      this.crearPreguntaAdicionandoElementos(indiceImagenAColocar);
    }
  }
  //Elije la forma de validar 
  validacion(numeroImagenPrecionada, elementoAcierto, elementoError, btnPress) {
    if (this.#_objetoPregunta.oImagen.imagenes.length > 3) {
      this.validarRespuestaN(numeroImagenPrecionada, elementoAcierto, elementoError, btnPress, this.#_objetoPregunta.oImagen.imagenes, this.#_opcionesNumerosAleatorios);
    }
    else if (this.#_objetoPregunta.oImagen.imagenes.length <= 3 && this.#_objetoPregunta.oImagen.imagenes.length > 0) {
      this.validarRespuestaN(numeroImagenPrecionada, elementoAcierto, elementoError, btnPress, this.#_intentosFinales, [0, 1, 2, 3]);
    }
    else {
      console.log('No hay elementos para validar ');

    }
  }
  validarRespuestaN(numeroImagenPrecionada, vtnAcierto, vtnError, btnPress, imagenesActuales, indicePosicion) {
    btnPress.classList.add("inactivo");
    if (imagenesActuales[indicePosicion[numeroImagenPrecionada]] === imagenesActuales[indicePosicion[this.#_indiceRespuesta]] && this.#_objetoPregunta.oImagen.imagenes.length <= 3) {
      if (this.#_objetoPregunta.oImagen.imagenes.length === 1) {
        this.#activarVentana(this.#_ventanaFinal);
      }
      else {        
        this.#activarVentana(vtnAcierto);
      }
      this.#borrarElemento((this.#_objetoPregunta.oImagen.imagenes.length - 1), this.#_objetoPregunta.oAudio.audios, this.#_objetoPregunta.oImagen.imagenes)
    }
    else if (imagenesActuales[indicePosicion[numeroImagenPrecionada]] === imagenesActuales[indicePosicion[this.#_indiceRespuesta]]) {
      this.#borrarElemento((indicePosicion[this.#_indiceRespuesta]), this.#_objetoPregunta.oAudio.audios, this.#_objetoPregunta.oImagen.imagenes)
      this.#activarVentana(vtnAcierto);
    }
    else {
      this.#activarVentana(vtnError);
    }
  }

  cerrarVentana(componente) {
    componente.classList.add('inactivo');
  }

  #borrarElemento(indiceArray, arregloAudio, arregloImagen) {
    arregloImagen.splice(indiceArray, 1);
    arregloAudio.splice(indiceArray, 1);
  }

  #numerosAleatorios(rango) {
    const numerosAleatorios = [];
    while (numerosAleatorios.length < 4) {
      const numeroAleatorio = Math.floor(Math.random() * (rango)); // Genera un número aleatorio dentro del rango especificado, no se cuenta el numero de rango que se le da, por los array
      if (!numerosAleatorios.includes(numeroAleatorio)) {
        numerosAleatorios.push(numeroAleatorio); // Agrega el número aleatorio al array si no está presente
      }
    }

    this.#_opcionesNumerosAleatorios = numerosAleatorios;
  }

  #numeroAleatorio(rango) {
    const numeroAleatorio = Math.floor(Math.random() * (rango + 1)); // Genera un número aleatorio dentro del rango
    return numeroAleatorio;
  }
  #crearArregloTemporal(grupoAleatorios, objetoPregunta) {
    let arreglo = [];
    for (let i = 0; i <= 3; i++) {
      arreglo.push(objetoPregunta.oImagen.imagenes[grupoAleatorios[i]]);
    }
    return arreglo;
  }
  #colocarImagenRespuesta(direccion, arregloTemporal, indiceRespuesta) {
    arregloTemporal[indiceRespuesta] = direccion;

  }
  #activarVentana(elemento) {
    elemento.classList.remove("inactivo");
  }

}
