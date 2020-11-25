module.exports = (server) => {
    const teamController = require('../controllers/teamController');
    const jwtMiddleware = require('../middleware/jwtMiddleware')

    server.route('/teams')
        //all
        .get(teamController.get_all_team)
        //team leader
        .post(teamController.create_a_team);

        
        server.route('/team/:team_id') // req.params.team_id
        //all    
        .get(teamController.get_a_team)
        //team leader
        .put(teamController.update_a_team)
        //admin
        .delete(teamController.delete_a_team);
        
        server.route('/user/:user_id/team')
            //all
            .get(teamController.list_team_of_user) 
}