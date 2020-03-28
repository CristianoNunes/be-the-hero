const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/*Login*/
routes.post('/sessions', SessionController.create);

/*Listar ONGS*/
routes.get('/ongs', OngController.index);
/*Cadastrar ONGS*/
routes.post('/ongs', OngController.create); 

/*Listar Incidents de uma única ONG*/
routes.get('/profile', ProfileController.index);

/*Listar Incidents*/
routes.get('/incidents', IncidentController.index)
/*Cadastrar Casos*/
routes.post('/incidents', IncidentController.create)
/*Excluir Casos*/
routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes;