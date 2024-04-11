const express = require('express');
const OperationService = require('../services/operationsService');

const router = express.Router();// Es una función, pero ¿Qué hace ?
// Se establecen las rutas que se utilizarán para dar y recibir información
router.post('/createQuestion', (req, res) => {
  // Traeremos los elementos que se envien desde el frontend
  const content = req.body;// es un objeto que contiene al elemento que nos envian
  console.log('Estamos en el backend ruta post');
  const contentImage = content.contenedorImagen;

    // Creamos el objeto pregunta y con el la primera pregunta
    const oOperacionServicio = new OperationService(contentImage);
    console.log(oOperacionServicio);
  res.json(
    {
      message:'SOY EL OBJETO QUE TIENE DOS PARAMETROS',
      data: content
    }
  )
});

router.get(
  
)

module.exports = router;
