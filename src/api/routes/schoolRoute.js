module.exports = (server) => {
    const schoolController = require('../controllers/schoolController');
    const jwtMiddleware = require('../middlewares/jwtMiddleware')

    server.route('/school')
        //all
        .get(schoolController.list_all_school)
        //admin
        .post(jwtMiddleware.verify_token_and_admin, schoolController.create_a_school);

    server.route('/school/:school_id') // req.params.school_id
        //all    
        .get(schoolController.get_a_school)
        //admin
        .put(jwtMiddleware.verify_token_and_admin, schoolController.update_a_school)
        //admin
        .delete(jwtMiddleware.verify_token_and_admin, schoolController.delete_a_school);
}