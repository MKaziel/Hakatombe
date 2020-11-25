module.exports = (server) => {
    const projectController = require('../controllers/projectController');
    const jwtMiddleware = require('../middleware/jwtMiddleware')

    server.route('/project')
        // all
        .get(projectController.list_all_project)
        //users
        .post(projectController.create_a_project);

    server.route('/project/:project_id') // req.params.school_id
        //all
        .get(projectController.get_a_project)
        //owner 
        .put(projectController.update_a_project)
        //owner 
        .delete(projectController.delete_a_project);

    server.route('/teams/:team_id/project')
        //all
        .get(projectController.get_all_projects_of_team)

}