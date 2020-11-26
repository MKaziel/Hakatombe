const middleware = require('../middlewares/jwtMiddleware');
const Questionnaire = require('../models/questionnaireModel');

exports.list_all_questionnaire = (request,response) => {
    Questionnaire.find({}, (error, questionnaire) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur."
            });
        } else {
            response.status(200);
            response.json(questionnaire);
        }
    });
}

exports.create_a_questionnaire = (request,response) => {
    let new_Q = new Questionnaire(request.body);
    new_Q.save((error, questionnaire) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur."
            });
        } else {
            response.status(201);
            response.json(questionnaire);
        }
    });
}

exports.get_a_questionnaire = (request,response) => {
    Questionnaire.findById(request.params.questionnaire_id, (error, questionnaire) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur."
            });
        } else {
            response.status(200);
            response.json(questionnaire);
        }
    });
}

exports.update_a_questionnaire = (request,response) => {
    Questionnaire.findByIdAndUpdate(request.params.questionnaire_id, request.body, {new:true}, (error, questionnaire) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur."
            });
        } else {
            response.status(200);
            response.json(questionnaire);
        }
    });
}

exports.delete_a_questionnaire = (request,response) => {
    Questionnaire.findByIdAndDelete(request.params.questionnaire_id, (error, questionnaire) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur."
            });
        } else {
            response.status(200);
            response.json(questionnaire);
        }
    });
}