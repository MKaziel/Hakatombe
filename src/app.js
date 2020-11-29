const express = require("express");
const server = express();
const cors = require("cors");

const hostname = "0.0.0.0";
const port = 3000;

//cors configuration
var whitelist = ["http://localhost"];
var corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            console.log(origin);
            callback(new Error("Not allowed by CORS"));
        }
    },
};

const mongoose = require("mongoose");
mongoose.connect("mongodb://mongo/apinodejs");

const bodyParser = require("body-parser");
server.use(bodyParser.urlencoded());
server.use(bodyParser.json());
// server.use(cors(corsOptions)); /** Ligne à commenter pour utiliser Postman */
server.use(cors()); /** Ligne à décommenter pour utiliser Postman */

//Route pour gérer les évènements
const eventRoute = require("./api/routes/eventRoute");
eventRoute(server);
//Route pour gérer les inscriptions
const inscriptionRoute = require("./api/routes/inscriptionRoute");
inscriptionRoute(server);
//Route pour gérer les projets
const projectRoute = require("./api/routes/projectRoute");
projectRoute(server);
//Route pour gérer les questionnaires
const questionnaireRoute = require("./api/routes/questionnaireRoute");
questionnaireRoute(server);
//Route pour gérer les écoles
const schoolRoute = require("./api/routes/schoolRoute");
schoolRoute(server);
//Route pour gérer les équipes
const teamRoute = require("./api/routes/teamRoute");
teamRoute(server);
//Route pour gérer les utilisateurs
const userRoute = require("./api/routes/userRoute");
userRoute(server);

//Configuration par défaut de l'écoute du serveur
server.listen(port, hostname);
//Configuration du port d'écoute du serveur
server.listen(process.env.FRONT_PORT, function () {
    console.log(`CORS-enabled web server listening on port ${process.env.FRONT_PORT}`);
})
