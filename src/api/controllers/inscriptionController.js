const middleware = require('../middlewares/jwtMiddleware');
const Inscription = require('../models/inscriptionModel');
const Team = require('../models/teamModel')
const Project = require('../models/projectModel')

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