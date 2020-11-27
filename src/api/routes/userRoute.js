module.exports = (server) => {
    const userController= require('../controllers/userController');
    const jwtMiddleware = require('../middlewares/jwtMiddleware')


    server.route('/users')
        //admin
        .get(userController.list_all_users)

    server.route('/users/register')
        //only guest
        .post( userController.create_an_user)
    
    server.route('/users/login')
        //only guest
        .post(userController.login_an_user)
    
    server.route('/teams/:team_id/users')
        //users
        .get(userController.get_users_team)

}