const express = require('express');
const OperationService = require('../services/operationsService');

const router = express.Router();// Es una función, pero ¿Qué hace ?
// Se establecen las rutas que se utilizarán para dar y recibir información
router.get('/validateResponse/:id',(req, res) => {
  const { id } = req.params;
  const serviceObject = new OperationService();
  const reply = serviceObject.validateResponse(id);
  res.json(
    {
      answer:reply,
      message: 'Se obtuvo una respuesta  !!'
    }
  )
});
router.get('/createQuestion', (req, res) => {
    // Creamos el objeto pregunta y con el la primera pregunta
  const serviceObject = new OperationService();
  serviceObject.createQuestion();
  const array = serviceObject.pathsToImages;
  res.json(
    {
      arrayOfImages: array,
      message: 'La optención fue exitosa !'
    }
  )
});
router.get('/createQuestion/next', (req, res) => {
  // Creamos el objeto pregunta y con el la primera pregunta
const serviceObject = new OperationService();
serviceObject.createQuestionNext();
const array = serviceObject.pathsToImages;
res.json(
  {
    arrayOfImages: array,
    message: 'La optención fue exitosa !'
  }
)
});
router.get('/createQuestion/getCurrentAudio',(req, res) => {
  const serviceObject = new OperationService()
  const currentAudio = serviceObject.currentAudio;
  res.json(
    {
      audio: currentAudio,
      message: 'El audio se obtuvo  !!'
    }
  )
});


module.exports = router;
