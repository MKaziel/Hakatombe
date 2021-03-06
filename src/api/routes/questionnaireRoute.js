module.exports = (server) => {
    const questionnaireController = require('../controllers/questionnaireController');
    const jwtMiddleware = require('../middlewares/jwtMiddleware')

    
    server.route('/questionnaire')
        //all
        .get(questionnaireController.list_all_questionnaire)
        //admin
        .post(jwtMiddleware.verify_token_admin, questionnaireController.create_a_questionnaire);

    server.route('/questionnaire/:questionnaire_id') // req.params.questionnaire_id
        //user
        .get(questionnaireController.get_a_questionnaire)
        //admin
        .put(jwtMiddleware.verify_token_admin, questionnaireController.update_a_questionnaire)
        //admin
        .delete(jwtMiddleware.verify_token_admin, questionnaireController.delete_a_questionnaire);
}