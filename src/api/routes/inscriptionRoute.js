module.exports = (server) => {
    const inscriptionController = require('../controllers/inscriptionController');
    const jwtMiddleware = require('../middlewares/jwtMiddleware')


    server.route('/inscription')
        //Only admin
        .get(inscriptionController.list_all_inscription)
        //all users
        .post(jwtMiddleware.verify_token_admin, inscriptionController.register_inscription);

    server.route('/inscription/:inscription_id') // req.params.inscription_id
        // team
        .get(inscriptionController.get_an_inscription)
        //owner
        .put(jwtMiddleware.verify_token_admin, inscriptionController.update_an_inscription)
        //owner
        .delete(jwtMiddleware.verify_token_admin, inscriptionController.delete_an_inscription);

    server.route('/teams/:team_id/inscription')
        //team
        .get(inscriptionController.get_all_inscriptions_of_team)

    server.route('projects/:project_id/inscription')
        //team
        .get(inscriptionController.get_an_inscription_of_project)
}