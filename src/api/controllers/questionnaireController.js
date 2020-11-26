const middleware = require('../middlewares/jwtMiddleware');
const Questionnaire = require('../models/questionnaireModel');

exports.list_all_questionnaire = (request,response) => {
    Questionnaire.find({}, (error, AllQ) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur."
            });
        } else {
            response.status(200);
            response.json(AllQ);
        }
    });
}

exports.create_a_questionnaire = (request,response) => {
    let new_Q = new School(request.body);
    new_Q.save((error, school) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur."
            });
        } else {
            response.status(201);
            response.json(school);
        }
    });
}

exports.get_a_questionnaire = (request,response) => {
    Questionnaire.findById(request.params.questionnaire_id, (error, AllQ) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur."
            });
        } else {
            response.status(200);
            response.json(AllQ);
        }
    });
}

exports.update_a_questionnaire = (request,response) => {
    Questionnaire.findByIdAndUpdate(request.params.questionnaire_id, (error, AllQ) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur."
            });
        } else {
            response.status(200);
            response.json(AllQ);
        }
    });
}

exports.delete_a_questionnaire = (request,response) => {
    Questionnaire.findByIdAndDelete(request.params.questionnaire_id, (error, AllQ) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur."
            });
        } else {
            response.status(200);
            response.json(AllQ);
        }
    });
}