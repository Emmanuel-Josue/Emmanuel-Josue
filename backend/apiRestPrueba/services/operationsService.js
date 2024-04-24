
"use strict";

const Question = require("../entities/pregunta.js");
const Operation = require("../entities/operation.js");


// Debo de implementar un patron singleton para que en cualquier punto de questionRoutes pueda acceder al mismo objeto
class OperationService{
  // private variables
  #operationObject;
  static singleInstance;

  constructor(){
    if(OperationService.singleInstance){// Si la variable estatica esta vacia devuelve un undefine
      return OperationService.singleInstance
    }
    OperationService.singleInstance = this;
  }
  createQuestion(){
    const questionObject = new Question();
    this.#operationObject = new Operation(questionObject);
  }
  validateResponse(valor){
    const number = parseInt(valor);
    return this.#operationObject.validation(number);
  }
  createQuestionNext(){
    this.#operationObject.chooseModeToCreateQuestion();
  }
  get pathsToImages(){
    return this.#operationObject.pathsToImages;
  }
  get currentAudio(){
    return this.#operationObject.currentAudio;
  }

}

module.exports = OperationService;
