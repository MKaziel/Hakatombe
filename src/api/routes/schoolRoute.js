module.exports = (server) => {
    const schoolController = require('../controllers/schoolController');
    const jwtMiddleware = require('../middlewares/jwtMiddleware')

    server.route('/school')
        //all
        .get(schoolController.list_all_school)
        //admin
        .post(schoolController.create_a_school);

    server.route('/school/:school_id') // req.params.school_id
        //all    
        .get(schoolController.get_a_school)
        //admin
        .put(schoolController.update_a_school)
        //admin
        .delete(schoolController.delete_a_school);
}