const middleware = require('../middlewares/jwtMiddleware');
const Project = require('../models/projectModel');

exports.list_all_project = (request,response) => {
    Project.find({}, (error, projects) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur."
            });
        } else {
            response.status(200);
            response.json(projects);
        }
    });
}

exports.create_a_project = (request,response) => {
    return null;
}

exports.get_a_project = (request,response) => {
    Project.findById(request.params.project_id, (error, project) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur."
            });
        } else {
            response.status(200);
            response.json(project);
        }
    });
}

exports.update_a_project = (request,response) => {
    Project.findByIdAndUpdate(request.params.project_id, (error, project) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur."
            });
        } else {
            response.status(200);
            response.json(project);
        }
    });
}

exports.delete_a_project = (request,response) => {
    Project.findByIdAndDelete(request.params.project_id, (error, project) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur."
            });
        } else {
            response.status(200);
            response.json(project);
        }
    });
}

exports.get_all_projects_of_team = (request,response) => {
    Project.find({team_id: request.params.team_id}, (error,projects) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur."
            });
        } else {
            response.status(200);
            response.json(projects);
        }
    });
}