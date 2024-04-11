/**
 *
 *    Todo lo del archivo main va a suceder aquí
 *
 *
 */

"use strict";

const Pregunta = require("../entities/pregunta.js");
const Operaciones = require("../entities/operacion.js");


// Debo de implementar un patron singleton para que en cualquier punto de questionRoutes pueda acceder al mismo objeto 
class OperationService{
  // private variables
  #_objectOperations

  constructor(imageContainer){
    const questionObject = new Pregunta();
     this.#_objectOperations = new Operaciones(imageContainer, questionObject);
  }

}

module.exports = OperationService;
