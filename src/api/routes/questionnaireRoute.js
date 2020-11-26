module.exports = (server) => {
    const questionnaireController = require('../controllers/questionnaireController');
    const jwtMiddleware = require('../middlewares/jwtMiddleware')

    
    server.route('/questionnaire')
        //admin
        .get(questionnaireController.list_all_questionnaire)
        //admin
        .post(questionnaireController.create_a_questionnaire);

    server.route('/questionnaire/:questionnaire_id') // req.params.questionnaire_id
        //user
        .get(questionnaireController.get_a_questionnaire)
        //admin
        .put(questionnaireController.update_a_questionnaire)
        //admin
        .delete(questionnaireController.delete_a_questionnaire);
}