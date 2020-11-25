module.exports = (server) => {
    const eventController = require('../controllers/eventController');
    const jwtMiddleware = require('../middleware/jwtMiddleware')

    //ONly for admins
    server.route('/event')
        .get(eventController.list_all_event)
        .post(eventController.create_a_event);

    server.route('/event/:event_id') // req.params.school_id
        //for everyone
        .get(eventController.get_a_event)
        //Only for admins
        .put(eventController.update_a_event)
        //Only for admins
        .delete(eventController.delete_a_event);

}