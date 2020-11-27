module.exports = (server) => {
    const eventController = require('../controllers/eventController');
    const jwtMiddleware = require('../middlewares/jwtMiddleware');

    //ONly for admins
    server.route('/event')
        .get(eventController.list_all_event)
        .post(jwtMiddleware.verify_token_and_roles,eventController.create_an_event);

    server.route('/event/:event_id') // req.params.school_id
        .get(eventController.get_an_event)//for everyone
        .put(eventController.update_an_event)//Only for admins
        .delete(eventController.delete_an_event);//Only for admins
}