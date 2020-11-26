const express = require('express');
const server = express();

const hostname = '0.0.0.0';
const port = 3000;

const mongoose = require('mongoose');
mongoose.connect('mongodb://mongo/apinodejs');

const bodyParser = require('body-parser');
server.use(bodyParser.urlencoded());
server.use(bodyParser.json());

//Route pour gérer les évènements
const eventRoute = require('./api/routes/eventRoute');
eventRoute(server);
//Route pour gérer les inscriptions
const inscriptionRoute = require('./api/routes/inscriptionRoute');
inscriptionRoute(server);
//Route pour gérer les projets 
const projectRoute = require('./api/routes/projectRoute');
projectRoute(server);
//Route pour gérer les questionnaires 
const questionnaireRoute = require('./api/routes/questionnaireRoute');
questionnaireRoute(server);
//Route pour gérer les écoles
const schoolRoute = require('./api/routes/schoolRoute');
schoolRoute(server);
//Route pour gérer les équipes
const teamRoute = require('./api/routes/teamRoute');
teamRoute(server);
//Route pour gérer les utilisateurs
const userRoute = require('./api/routes/userRoute');
userRoute(server);

server.listen(port, hostname);