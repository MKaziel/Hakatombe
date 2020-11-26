const middleware = require('../middlewares/jwtMiddleware');
const User = require('../models/userModels');

exports.list_all_users = (request,response) => {
    User.find({}, (error, users) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur."
            });
        } else {
            response.status(200);
            response.json(users);
        }
    })
}

exports.create_an_user = (request,response) => {
    let new_user = new User(request.body);
    new_user.save((error, user) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur."
            });
        } else {
            response.status(201);
            response.json(user);
        }
    });
}

exports.login_an_user = (request,response) => {
    let rgx = new RegExp('^[^\W][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\@[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\.[a-zA-Z]{2,4}$');
    // if(rgx.test(req.body.email)){
    //     Bcrypt.hash(req.body.password,SaltRounds,(err,hash)=>{
    //         if(!err){
    //             let new_user = new User({
    //                 ...req.body,
    //                 password : hash
    //             });
    //             new_user.save((error, user) => {
    //                 if (error) {
    //                     res.status(500);
    //                     console.log(error);
    //                     res.json({
    //                         message: "Erreur serveur."
    //                     })
    //                 } else {
    //                     res.status(201);
    //                     res.json({
    //                         message: `Utilisateur crée : ${user.email}`
    //                     })
    //                 }
    //             })
    //         } else {
    //             res.status(500);
    //             console.log(error);
    //             res.json({
    //                 message: "Erreur serveur."
    //             })
    //         }
    //     })
    // } else {
    //     res.status(400);
    //     console.log(err);
    //     res.json({
    //         message: "Invalid Credential given !"
    //     });
    // }
    return null;
}

exports.get_users_team = (request,response) => {
    User.find({team_id: request.params.team_id}, (error,users) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur."
            });
        } else {
            response.status(200);
            response.json(users);
        }
    })
}