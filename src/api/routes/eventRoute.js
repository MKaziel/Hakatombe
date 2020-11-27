module.exports = (server) => {
    const eventController = require('../controllers/eventController');
    const jwtMiddleware = require('../middlewares/jwtMiddleware');

    /**
     * @param :event_id : ID de l'evènement fourni dans l'URI
     * @filter Route qui est authorisée seulement pour les administrateurs
     */
    server.route('/event')
        .get(eventController.list_all_event)
        .post(jwtMiddleware.verify_token_and_admin,eventController.create_an_event);

    /**
     * @param :event_id : ID de l'evènement fourni dans l'URI
     * @filter Verbe GET authorisé pour tous 
     * @filter Verbe PUT & DELETE authorisé seulement pour les administrateurs
     */
    server.route('/event/:event_id')
        .get(eventController.get_an_event)
        .put(jwtMiddleware.verify_token_and_admin,eventController.update_an_event)
        .delete(jwtMiddleware.verify_token_and_admin,eventController.delete_an_event);
}