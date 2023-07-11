"use strict";
import { Pregunta } from "./pregunta.mjs";
/* -------------------------------- Importaciones ----------------------------------- */

export class Operaciones {
  #_objetoPregunta;
  #_contenedorImagen;
  #_indiceRespuesta;
  #_opcionesNumerosAleatorios;
  #_intentosFinales;
  constructor( contenedorImagen,objetoPregunta) {
    this.#_objetoPregunta = objetoPregunta;
    this.#_contenedorImagen = contenedorImagen;

    this.crearPregunta();
    
  }

  crearPregunta(){  
    // El rango es el número actual que hay en el arreglo de las imagenes del objeto imagen 
    this.#numerosAleatorios(this.#_objetoPregunta.oImagen.imagenes.length);  
    this.#establecerRutasAElementos(this.#_contenedorImagen, this.#_objetoPregunta.oImagen.imagenes);
    // De los cuatro números que se muestran se elije uno para que sea la respuesta
    this.#_indiceRespuesta = this.#numeroAleatorio(3);
    this.#_objetoPregunta.oAudio.crearOAudio(this.#_objetoPregunta.oAudio.audios[this.#_opcionesNumerosAleatorios[this.#_indiceRespuesta]]);    
  }
  crearPreguntaAdicionandoElementos(indiceImagen){

    const preguntaParaRelleno = new Pregunta();
    //Buscamos la posición del elemento que es identico al elemento que será la respuesta, para que aparesca una imagen duplicada
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


    this.#establecerRutasAElementosDos(this.#_contenedorImagen, this.#_intentosFinales);
    // En el audio se coloca el número "indiceImagen" para hacer referencia al numero del audio (posición), es el ultimo número que hay 
    // en ambos arreglos 2, 1, 0 
    this.#_objetoPregunta.oAudio.crearOAudio(this.#_objetoPregunta.oAudio.audios[indiceImagen]);
  }
  
 #establecerRutasAElementos(contenedorImagen, arregloImagenes) {
    
    contenedorImagen[0].src = arregloImagenes[this.#_opcionesNumerosAleatorios[0]];
    contenedorImagen[1].src = arregloImagenes[this.#_opcionesNumerosAleatorios[1]];
    contenedorImagen[2].src = arregloImagenes[this.#_opcionesNumerosAleatorios[2]];
    contenedorImagen[3].src = arregloImagenes[this.#_opcionesNumerosAleatorios[3]];
  }

  #establecerRutasAElementosDos(contenedorImagen, arregloImagenes) {
    
    contenedorImagen[0].src = arregloImagenes[0];
    contenedorImagen[1].src = arregloImagenes[1];
    contenedorImagen[2].src = arregloImagenes[2];
    contenedorImagen[3].src = arregloImagenes[3];
  }
  

  
  validarRespuesta(numeroImagenPrecionada, elementoAcierto, elementoError, btnPress){
    btnPress.classList.add("inactivo");
    //Se verifica con el array de las imagenes, una de las cuatro que se elijieron y se compara con el indice del 
    //numero del audio. 
    if (this.#_objetoPregunta.oImagen.imagenes[this.#_opcionesNumerosAleatorios[numeroImagenPrecionada]] === this.#_objetoPregunta.oImagen.imagenes[this.#_opcionesNumerosAleatorios[this.#_indiceRespuesta]]) {
      elementoAcierto.classList.remove("inactivo");
      this.#borrarElemento(this.#_opcionesNumerosAleatorios[this.#_indiceRespuesta], this.#_objetoPregunta.oAudio.audios, this.#_objetoPregunta.oImagen.imagenes);
    
      console.log('Elementos actuales en el array ' + this.#_objetoPregunta.oImagen.imagenes);
      
      console.log('Tu respuesta fue correcta');
      
    }
    else{
      elementoError.classList.remove("inactivo");
      console.log('Fallaste');
      
    }
  }
  validarRespuestaDos(numeroImagenPrecionada, elementoAcierto, elementoError, btnPress){
    btnPress.classList.add("inactivo");
    if (this.#_intentosFinales[numeroImagenPrecionada] === this.#_intentosFinales[this.#_indiceRespuesta]) {
      elementoAcierto.classList.remove("inactivo");
      this.#borrarElemento((this.#_objetoPregunta.oImagen.imagenes.length-1), this.#_objetoPregunta.oAudio.audios, this.#_objetoPregunta.oImagen.imagenes);    
      console.log('Elementos actuales en el array ' + this.#_objetoPregunta.oImagen.imagenes);
      if (this.#_objetoPregunta.oImagen.imagenes.length === 0) {
          console.log(' El programa se ha terminado !!');
          
      }
      
    }
    else{
      elementoError.classList.remove("inactivo");
      console.log('Fallaste');
      
    }
  }

  elegirModoDeCrearPregunta(){

    if(this.#_objetoPregunta.oImagen.imagenes.length > 3){
      this.crearPregunta();
    }
    else if(this.#_objetoPregunta.oImagen.imagenes.length <=3 && this.#_objetoPregunta.oImagen.imagenes.length > 0){
      let indiceImagenAColocar = (this.#_objetoPregunta.oImagen.imagenes.length - 1);
      this.crearPreguntaAdicionandoElementos(indiceImagenAColocar);
    }
    else{
      console.log('El programa ha concluido !!');
      
    }
  }
  //Elije la forma de validar 
  validacion(numeroImagenPrecionada, elementoAcierto, elementoError, btnPress){
    if (this.#_objetoPregunta.oImagen.imagenes.length > 3) {
      this.validarRespuesta(numeroImagenPrecionada, elementoAcierto, elementoError, btnPress);
    }
    else if(this.#_objetoPregunta.oImagen.imagenes.length <=3 && this.#_objetoPregunta.oImagen.imagenes.length > 0){
      this.validarRespuestaDos(numeroImagenPrecionada, elementoAcierto, elementoError, btnPress);
    }
    else{
      console.log('No hay elementos para validar ');
      
    }
    }

    cerrarVentana(componente){
      componente.classList.add('inactivo');
    }

  #borrarElemento(indiceArray, arregloAudio, arregloImagen){

    console.log('Elemento a eliminar' + arregloImagen[indiceArray]);
    
    arregloImagen.splice(indiceArray, 1);
    arregloAudio.splice(indiceArray, 1);
  }

  #numerosAleatorios(rango) {
    const numerosAleatorios = [];

    while (numerosAleatorios.length < 4) {
      const numeroAleatorio = Math.floor(Math.random() * (rango)); // Genera un número aleatorio dentro del rango especificado, no se cuenta el numero de rango que se le da, por los array
      console.log('Nos encontramos en el bucle while !!');
      
      if (!numerosAleatorios.includes(numeroAleatorio)) {
        numerosAleatorios.push(numeroAleatorio); // Agrega el número aleatorio al array si no está presente
      }
    }

    this.#_opcionesNumerosAleatorios = numerosAleatorios;
  }

  #numeroAleatorio(rango){
    const numeroAleatorio = Math.floor(Math.random() * (rango + 1)); // Genera un número aleatorio dentro del rango
    return numeroAleatorio;
  }
  #crearArregloTemporal(grupoAleatorios, objetoPregunta){
    let arreglo = [];
    for (let i = 0; i <= 3; i++) {   
      arreglo.push(objetoPregunta.oImagen.imagenes[grupoAleatorios[i]]);
    }
    return arreglo;
  }
  #colocarImagenRespuesta(direccion, arregloTemporal, indiceRespuesta){
    arregloTemporal[indiceRespuesta] = direccion;

  }

}
