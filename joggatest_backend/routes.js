const express = require('express');


const registrosController = require('./controllers/registro.controller');
  
const routes = express.Router();
  
    // Criar novo Servico
routes.post("/", registrosController.create);


module.exports = routes;