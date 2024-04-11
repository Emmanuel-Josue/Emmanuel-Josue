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
const Question = require("./question.js");
/* -------------------------------- Imports ----------------------------------- */

class Operations {
  #_questionObject;
  #_imageContainer;
  #_answerIndex;
  #_randomNumberOptions;
  #_finalAttempts;
  #_finalWindow;
  constructor(imageContainer, questionObject) {
    this.#_questionObject = questionObject;
    this.#_imageContainer = imageContainer;
    this.createQuestion();
  }
  createQuestion() {
    // El rango es el número actual que hay en el arreglo de las imagenes del objeto imagen
    this.#randomNumbers(this.#_questionObject.oImage.images.length);
    this.#setPathsToElements(this.#_imageContainer, this.#_questionObject.oImage.images, this.#_randomNumberOptions);
    // De los cuatro números que se muestran se elije uno para que sea la respuesta
    this.#_answerIndex = this.#randomNumber(3);
    this.#_questionObject.oAudio.createOAudio(this.#_questionObject.oAudio.audios[this.#_randomNumberOptions[this.#_answerIndex]]);
  }
  createQuestionAddingElements(imageIndex) {
    const questionForFilling = new Question();
    //Buscamos la posición del elemento que es identico al elemento que será la respuesta, para que no aparesca una imagen duplicada
    let index = questionForFilling.oImage.images.indexOf(this.#_questionObject.oImage.images[imageIndex]);
    //borramos en ambos arreglo del objeto nuevo la dirección o cadena que será la respuesta
    this.#deleteElement(index, questionForFilling.oAudio.audios, questionForFilling.oImage.images);
    // Para tener un rango nuevamente amplio se utiliza el largo del objeto que servira de apoyo proporcionando más imagenes
    this.#randomNumbers(questionForFilling.oImage.images.length);

    // Creamos el arreglo  temporal
    this.#_finalAttempts = this.#createTemporaryArray(this.#_randomNumberOptions, questionForFilling);

    // Contenedor en donde se colocara la imagen respuesta
    this.#_answerIndex = this.#randomNumber(3);

    //Intercambiamos un elemento aleatorio por la imagen respuesta.
    this.#placeAnswerImage(this.#_questionObject.oImage.images[imageIndex], this.#_finalAttempts, this.#_answerIndex);


    this.#setPathsToElements(this.#_imageContainer, this.#_finalAttempts, [0, 1, 2, 3]);
    // En el audio se coloca el número "indiceImagen" para hacer referencia al numero del audio (posición), es el ultimo número que hay
    // en ambos arreglos 2, 1, 0
    this.#_questionObject.oAudio.createOAudio(this.#_questionObject.oAudio.audios[imageIndex]);
  }
  #setPathsToElements(imageContainer, imageArray, aPosition) {
    imageContainer[0].src = imageArray[aPosition[0]];
    imageContainer[1].src = imageArray[aPosition[1]];
    imageContainer[2].src = imageArray[aPosition[2]];
    imageContainer[3].src = imageArray[aPosition[3]];
  }
  set finalWindow(element) {
    this.#_finalWindow = element;
  }
  chooseModeToCreateQuestion() {

    if (this.#_questionObject.oImage.images.length > 3) {
      this.createQuestion();
      this.#_questionObject.oAudio.play();
    }
    else if (this.#_questionObject.oImage.images.length <= 3 && this.#_questionObject.oImage.images.length > 0) {
      //Indice que ayudara a encontrar el string que se debe de eliminar en el arreglo de apoyo.
      let imageIndexToPlace = (this.#_questionObject.oImage.images.length - 1);
      this.createQuestionAddingElements(imageIndexToPlace);
      this.#_questionObject.oAudio.play();
    }
  }
  // Choose the way to validate
  validation(pressedImageNumber, successElement, errorElement, btnPress) {
    if (this.#_questionObject.oImage.images.length > 3) {
      this.validateResponseN(pressedImageNumber, successElement, errorElement, btnPress, this.#_questionObject.oImage.images, this.#_randomNumberOptions);
    }
    else if (this.#_questionObject.oImage.images.length <= 3 && this.#_questionObject.oImage.images.length > 0) {
      this.validateResponseN(pressedImageNumber, successElement, errorElement, btnPress, this.#_finalAttempts, [0, 1, 2, 3]);
    }
    else {
      console.log('No hay elementos para validar ');

    }
  }
  validateResponseN(pressedImageNumber, successWindow, errorWindow, btnPress, currentImages, positionIndex) {
    btnPress.classList.add("inactive");
    if (currentImages[positionIndex[pressedImageNumber]] === currentImages[positionIndex[this.#_answerIndex]] && this.#_questionObject.oImage.images.length <= 3) {
      if (this.#_questionObject.oImage.images.length === 1) {
        this.#activateWindow(this.#_finalWindow);
      }
      else {
        this.#activateWindow(successWindow);
      }
      this.#deleteElement((this.#_questionObject.oImage.images.length - 1), this.#_questionObject.oAudio.audios, this.#_questionObject.oImage.images)
    }
    else if (currentImages[positionIndex[pressedImageNumber]] === currentImages[positionIndex[this.#_answerIndex]]) {
      this.#deleteElement((positionIndex[this.#_answerIndex]), this.#_questionObject.oAudio.audios, this.#_questionObject.oImage.images)
      this.#activateWindow(successWindow);
    }
    else {
      this.#activateWindow(errorWindow);
    }
  }
closeWindow(component) {
    component.classList.add('inactive');
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
      array.push(questionObject.oImage.images[randomGroup[i]]);
    }
    return array;
  }
  #placeAnswerImage(direction, temporaryArray, answerIndex) {
    temporaryArray[answerIndex] = direction;

  }
  #activateWindow(element) {
    element.classList.remove("inactive");
  }

}

module.exports = Operations;


