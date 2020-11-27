const middleware = require('../middlewares/jwtMiddleware');
const Inscription = require('../models/inscriptionModel');
const Team = require('../models/teamModel')
const Project = require('../models/projectModel')

/**
 * 
 * @param {*} request 
 * @param {*} response
 * Listez toutes les inscriptions 
 */
exports.list_all_inscription = (request, response) => {
    Inscription.find({}, (error, inscriptions) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur."
            })
        } else {
            response.status(200);
            response.json(inscriptions)
        }
    })
}

/**
 * 
 * @param {*} request 
 * @param {*} response
 * Crée une inscription selon le body 
 */
exports.register_inscription = (request, response) => {
    let new_inscription = new Inscription(request.body);
    new_inscription.save((error, inscription) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur."
            })
        } else {
            response.status(201);
            response.json(inscription)
        }
    })
}

/**
 * 
 * @param {*} request 
 * @param {*} response
 * Récupéré une inscription avec son ID 
 */
exports.get_an_inscription = (request, response) => {
    Inscription.findById(request.params.inscription_id, (error, inscription) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur."
            })
        } else {
            response.status(200);
            response.json(inscription)
        }
    })
}

/**
 * 
 * @param {*} request 
 * @param {*} response
 *  Mettre à jour une inscription avec son ID selon le body
 */
exports.update_an_inscription = (request, response) => {
    Inscription.findByIdAndUpdate(request.params.inscription_id, request.body, {
        new: true
    }, (error, inscription) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur."
            })
        } else {
            response.status(200);
            response.json(inscription)
        }
    })
}

/**
 * 
 * @param {*} request 
 * @param {*} response 
 * Supprimer une inscription avec son ID
 */
exports.delete_an_inscription = (request, response) => {
    Inscription.findByIdAndRemove(request.params.inscription_id, (error, inscription) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur."
            })
        } else {
            response.status(200);
            response.json({
                message: "Inscription supprimé !"
            })
        }
    })
}

/**
 * 
 * @param {*} request 
 * @param {*} response 
 * Récupérer toutes les inscriptions d'une team selon l'ID de la team
 */
exports.get_all_inscriptions_of_team = (request, response) => {
    Team.findById(request.params.team_id, (error, team) => {
        if (error) {
            response.status(500)
            console.log(error)
            response.json({
                message: "Erreur Serveur"
            })
        } else {
            Inscription.find({
                team_id: request.params.team_id
            }, (error, inscriptions) => {
                if (error) {
                    response.status(500);
                    console.log(error);
                    response.json({
                        message: "Erreur serveur."
                    })
                } else {
                    response.status(200);
                    response.json(inscriptions)
                }
            })
        }

    })
}


/**
 * 
 * @param {*} request 
 * @param {*} response
 * Récuépéré l'inscription d'un projet selon l'ID d'un projet
 */
exports.get_an_inscription_of_project = (request, response) => {
    Project.findById(request.params.project_id, (error, project) => {
        if (error) {
            response.status(500)
            console.log(error)
            response.json({
                message: "Erreur Serveur"
            })
        } else {
            Inscription.find({
                project_id: request.params.project_id
            }, (error, inscriptions) => {
                if (error) {
                    response.status(500);
                    console.log(error);
                    response.json({
                        message: "Erreur serveur."
                    })
                } else {
                    response.status(200);
                    response.json(inscriptions)
                }
            })
        }

    })}