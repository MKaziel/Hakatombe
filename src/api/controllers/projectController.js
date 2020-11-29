const middleware = require('../middlewares/jwtMiddleware');
const Project = require('../models/projectModel');

/**
 * 
 * @param {*} request 
 * @param {*} response
 * Listez tous les projets 
 */
exports.list_all_project = (request,response) => {
    Project.find({}, (error, projects) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur : Project / Get all"
            });
        } else {
            response.status(200);
            response.json(projects);
        }
    });
}

/**
 * 
 * @param {*} request 
 * @param {*} response
 *  Crée un projet 
 */
exports.create_a_project = (request,response) => {
    let new_project = new Project(request.body);
    new_project.save((error, project) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur : Project / Create"
            });
        } else {
            response.status(201);
            response.json(project);
        }
    });
}

/**
 * 
 * @param {*} request 
 * @param {*} response
 * Récupéré un projet avec son ID 
 */
exports.get_a_project = (request,response) => {
    Project.findById(request.params.project_id, (error, project) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur : Project / Get one"
            });
        } else {
            response.status(200);
            response.json(project);
        }
    });
}

/**
 * 
 * @param {*} request 
 * @param {*} response
 * Mettre à jour un projet avec son ID et selon un body entré 
 */
exports.update_a_project = (request,response) => {
    Project.findByIdAndUpdate(request.params.project_id, request.body, (error, project) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur : Project / Update"
            });
        } else {
            response.status(200);
            response.json(project);
        }
    });
}

/**
 * 
 * @param {*} request 
 * @param {*} response
 * Supprimer un projet 
 */
exports.delete_a_project = (request,response) => {
    Project.findByIdAndDelete(request.params.project_id, (error, project) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur : Project / Delete"
            });
        } else {
            response.status(200);
            response.json(project);
        }
    });
}

/**
 * 
 * @param {*} request 
 * @param {*} response
 * Récupéré tous les projets pour une TEAM  
 */
exports.get_all_projects_of_team = (request,response) => {
    Project.find({team_id: request.params.team_id}, (error,projects) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur : Project / Get all of Team"
            });
        } else {
            response.status(200);
            response.json(projects);
        }
    });
}