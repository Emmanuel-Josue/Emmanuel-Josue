// 'use strict'

// const Question = require("./pregunta.js");

// class Operation{
//   #questionObject;
//   #imageArray;// new
//   #fourRandomNumbers;
//   #finalAttempts;
//   #endWindow;

//   constructor(questionObject){
//     this.#questionObject = questionObject;

//   }
//   createQuestion(){

//   }

// }

"use strict";
const Question = require("./pregunta.js");
/* -------------------------------- Imports ----------------------------------- */

class Operations {
  #_questionObject;
  #_answerIndex;
  #_randomNumberOptions;
  #_finalAttempts;
  #pathsToImagesForQuestion;
  #currentAudio;
  #reply;
  constructor(questionObject) {
    this.#_questionObject = questionObject;
    this.createQuestion();
  }
  createQuestion() {
    console.log('Entra la función createQuestion ----------:::::::::::::');
    // El rango es el número actual que hay en el arreglo de las imagenes del objeto imagen
    this.#randomNumbers(this.#_questionObject.oImagen.imagenes.length);
    this.#setPathsToElements( this.#_questionObject.oImagen.imagenes, this.#_randomNumberOptions);// En este punto debemos de retornar las rutas al frontend
    // De los cuatro números que se muestran se elije uno para que sea la respuesta
    this.#_answerIndex = this.#randomNumber(3);

    // Esta linea se reemplazará por una que solo asigne el string del audio a una variable que se devolverá y se reproducira en el frontend
//    this.#_questionObject.oAudio.crearOAudio(this.#_questionObject.oAudio.audios[this.#_randomNumberOptions[this.#_answerIndex]]);
    this.#currentAudio = this.#_questionObject.oAudio.audios[this.#_randomNumberOptions[this.#_answerIndex]];
  }
  createQuestionAddingElements(imageIndex) {
    const questionForFilling = new Question();
    //Buscamos la posición del elemento que es identico al elemento que será la respuesta, para que no aparesca una imagen duplicada
    let index = questionForFilling.oImagen.imagenes.indexOf(this.#_questionObject.oImagen.imagenes[imageIndex]);
    //borramos en ambos arreglo del objeto nuevo la dirección o cadena que será la respuesta
    this.#deleteElement(index, questionForFilling.oAudio.audios, questionForFilling.oImagen.imagenes);
    // Para tener un rango nuevamente amplio se utiliza el largo del objeto que servira de apoyo proporcionando más imagenes
    this.#randomNumbers(questionForFilling.oImagen.imagenes.length);
    // Creamos el arreglo  temporal
    this.#_finalAttempts = this.#createTemporaryArray(this.#_randomNumberOptions, questionForFilling);
    // numero del contenedor en donde se colocara la imagen respuesta
    this.#_answerIndex = this.#randomNumber(3);
    //Intercambiamos un elemento aleatorio por la imagen respuesta.
    this.#placeAnswerImage(this.#_questionObject.oImagen.imagenes[imageIndex], this.#_finalAttempts, this.#_answerIndex);
    this.#setPathsToElements( this.#_finalAttempts, [0, 1, 2, 3]);
    this.#currentAudio = this.#_questionObject.oAudio.audios[imageIndex];
  }
  chooseModeToCreateQuestion() {

    if (this.#_questionObject.oImagen.imagenes.length > 3) {
      this.createQuestion();
    }
    else if (this.#_questionObject.oImagen.imagenes.length <= 3 && this.#_questionObject.oImagen.imagenes.length > 0) {
      //Indice que ayudara a encontrar el string que se debe de eliminar en el arreglo de apoyo.
      let imageIndexToPlace = (this.#_questionObject.oImagen.imagenes.length - 1);
      this.createQuestionAddingElements(imageIndexToPlace);

    }
  }
  // Choose the way to validate
  validation(pressedImageNumber) {
    if (this.#_questionObject.oImagen.imagenes.length > 3) {
       return this.#validateResponseN(pressedImageNumber, this.#_questionObject.oImagen.imagenes, this.#_randomNumberOptions);
    }
    else if (this.#_questionObject.oImagen.imagenes.length <= 3 && this.#_questionObject.oImagen.imagenes.length > 0) {
      return this.#validateResponseN(pressedImageNumber,this.#_finalAttempts, [0, 1, 2, 3]);
    }
    else {
      console.log('No hay elementos para validar ');

    }
  }
  get pathsToImages(){
    console.log('Linea 70 --');
    console.log(this.#pathsToImagesForQuestion);
    return this.#pathsToImagesForQuestion;
  }
  get currentAudio(){
    return this.#currentAudio;
  }
  
  #validateResponseN(pressedImageNumber, currentImages, positionIndex) {
    if (currentImages[positionIndex[pressedImageNumber]] === currentImages[positionIndex[this.#_answerIndex]] && this.#_questionObject.oImagen.imagenes.length <= 3) {
      if (this.#_questionObject.oImagen.imagenes.length === 1) {
        /**
         * El booleano será true y el bolleano para la ventana final será true
        */
       this.#reply = {
        isItCorret: true,
        showFinalWindow: true
       }

      }
      else {
        this.#reply = {
          isItCorret: true,
          showFinalWindow: false
         }
        /**
         * El booleano será true y el bolleano para la ventana final será false
        */
      }
      this.#deleteElement((this.#_questionObject.oImagen.imagenes.length - 1), this.#_questionObject.oAudio.audios, this.#_questionObject.oImagen.imagenes)
      return this.#reply;
    }
    else if (currentImages[positionIndex[pressedImageNumber]] === currentImages[positionIndex[this.#_answerIndex]]) {
      this.#deleteElement((positionIndex[this.#_answerIndex]), this.#_questionObject.oAudio.audios, this.#_questionObject.oImagen.imagenes)
      /**
       *  Se enviara el booleano como true y el booleano para la ventana final será flase
       */
      console.log('Entro aquí -!!!');
      console.log(typeof pressedImageNumber);
      this.#reply = {
        isItCorret: true,
        showFinalWindow: false
       }
       return this.#reply;
    }
    else {
      this.#reply = {
        isItCorret: false,
        showFinalWindow: false
       }
       return this.#reply;
    }
  }
  #setPathsToElements( imageArray, aPosition) {

    // Se quito el parametro image container ya que eventualmente se cambiara esto, este método devolvera un array
    this.#pathsToImagesForQuestion = [];
    this.#pathsToImagesForQuestion.push(imageArray[aPosition[0]]);
    this.#pathsToImagesForQuestion.push(imageArray[aPosition[1]]);
    this.#pathsToImagesForQuestion.push(imageArray[aPosition[2]]);
    this.#pathsToImagesForQuestion.push(imageArray[aPosition[3]]);
  }
  #deleteElement(arrayIndex, audioArray, imageArray) {
    imageArray.splice(arrayIndex, 1);
    audioArray.splice(arrayIndex, 1);
  }
  #randomNumbers(range) {
    const randomNumbers = [];
    while (randomNumbers.length < 4) {
      const randomNumber = Math.floor(Math.random() * (range)); // Genera un número aleatorio dentro del rango especificado, no se cuenta el numero de rango que se le da, por los array
      if (!randomNumbers.includes(randomNumber)) {
        randomNumbers.push(randomNumber); // Agrega el número aleatorio al array si no está presente
      }
    }

    this.#_randomNumberOptions = randomNumbers;
  }
  #randomNumber(range) {
    const randomNumber = Math.floor(Math.random() * (range + 1)); // Genera un número aleatorio dentro del rango
    return randomNumber;
  }
 #createTemporaryArray(randomGroup, questionObject) {
    let array = [];
    for (let i = 0; i <= 3; i++) {
      array.push(questionObject.oImagen.imagenes[randomGroup[i]]);
    }
    return array;
  }
  #placeAnswerImage(direction, temporaryArray, answerIndex) {
    temporaryArray[answerIndex] = direction;

  }
}

module.exports = Operations;


