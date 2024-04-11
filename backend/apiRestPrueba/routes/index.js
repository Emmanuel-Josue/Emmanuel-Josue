const express = require('express');
const routesQuestion = require('./questionRoutes');
const router = express.Router();

function routerApi(app){
  router.use('/question', routesQuestion);
  app.use('/api/v1', router);
}

module.exports = routerApi;
