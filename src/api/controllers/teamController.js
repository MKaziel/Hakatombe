const middleware = require('../middlewares/jwtMiddleware');
const Team = require('../models/teamModel');
const User = require('../models/userModels');

/**
 * 
 * @param {*} request 
 * @param {*} response
 * Récupérer toutes les teams 
 */
exports.get_all_team = (request,response) => {
    Team.find({}, (error, teams) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur."
            });
        } else {
            response.status(200);
            response.json(teams);
        }
    });
}

/**
 * 
 * @param {*} request 
 * @param {*} response
 * Créer une team 
 */
exports.create_a_team = (request,response) => {
    let new_team = new Team(request.body);
    new_team.save((error, team) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur."
            });
        } else {
            response.status(201);
            response.json(team);
        }
    });
}

/**
 * 
 * @param {*} request 
 * @param {*} response
 * Récupéré une team avec son ID 
 */
exports.get_a_team = (request,response) => {
    Team.findById(request.params.team_id, (error, team) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur."
            });
        } else {
            response.status(200);
            response.json(team);
        }
    });
}

/**
 * 
 * @param {*} request 
 * @param {*} response
 * Mettre à jour une team 
 */
exports.update_a_team = (request,response) => {
    Team.findByIdAndUpdate(request.params.team_id, request.body, {
        new: true
    }, (error, team) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur."
            });
        } else {
            response.status(200);
            response.json(team);
        }
    });
}

/**
 * 
 * @param {*} request 
 * @param {*} response
 * Supprimer une team 
 */
exports.delete_a_team = (request,response) => {
    Team.findByIdAndRemove(request.params.param_id, (error, team) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur."
            });
        } else {
            response.status(200);
            response.json({
                message: "Evenement supprimé !",
                content: team
            });
        }
    });
}

exports.list_team_of_user = (request,response) => {
    User.findById(request.params.user_id, (error,user) => {
        if(!error && user !== null){
            Team.findById(user.team_id, (err,team) => {
                if (err) {
                    response.status(500);
                    console.log(err);
                    response.json({
                        message: "Erreur serveur."
                    });
                } else {
                    response.status(200);
                    response.json({
                        message: "Team found",
                        content: team
                    });
                }
            });
        } else if (user === null) {
            response.status(400);
            response.json({
                message: "Team not found"
            });
        } else {
            response.status(500);
            response.json({
                message: "Server error"
            });
        }
    });
}