const jwt = require("jsonwebtoken");
const User = require("../models/userModels");
const Bcrypt = require("bcrypt");
const SaltRounds = 10;

exports.list_all_users = (request, response) => {
    User.find({}, (error, users) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur.",
            });
        } else {
            response.status(200);
            response.json(users);
        }
    });
};

exports.create_an_user = (request, response) => {
    let rgx = new RegExp(
        "^[^W][a-zA-Z0-9_]+(.[a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+(.[a-zA-Z0-9_]+)*.[a-zA-Z]{2,4}$"
    );
    if (rgx.test(request.body.email)) {
        Bcrypt.hash(request.body.password, SaltRounds, (err, hash) => {
            if (!err) {
                let new_user = new User({
                    ...request.body,
                    password: hash,
                });
                new_user.save((error, user) => {
                    if (error) {
                        response.status(500);
                        console.log(error);
                        response.json({
                            message: "Erreur serveur.",
                        });
                    } else {
                        response.status(201);
                        response.json({
                            message: `Utilisateur crée : ${user.email}`,
                        });
                    }
                });
            } else {
                response.status(500);
                console.log(err);
                response.json({
                    message: "Erreur serveur.",
                });
            }
        });
    } else {
        response.status(400);
        console.log(err);
        response.json({
            message: "Invalid Credential given !",
        });
    }
};

exports.login_an_user = (request, response) => {
    let rgx = new RegExp(
        "^[^\\W][a-zA-Z0-9_]+(\\.[a-zA-Z0-9_]+)*\\@[a-zA-Z0-9_]+(.[a-zA-Z0-9_]+)*\\.[a-zA-Z]{2,4}$"
    );
    if (rgx.test(request.body.email)) {
        User.findOne(
            {
                email: request.body.email,
            },
            (error_1, user) => {
                if (error_1) {
                    response.status(500);
                    console.log(error_1);
                    response.json({
                        message: "Erreur serveur.",
                    });
                } else if (user !== null) {
                    Bcrypt.compare(
                        request.body.password,
                        user.password,
                        (error_2, rslt) => {
                            if (!error_2 && rslt) {
                                jwt.sign(
                                    {
                                        email: user.email,
                                        role: "user",
                                    },
                                    process.env.JWT_SECRET,
                                    {
                                        expiresIn: "30 days",
                                    },
                                    (error_3, token) => {
                                        if (error_3) {
                                            response.status(400);
                                            console.log(error_3);
                                            response.json({
                                                message:
                                                    "Invalid Credential given !",
                                            });
                                        } else {
                                            response.json({
                                                myToken: token,
                                            });
                                        }
                                    }
                                );
                            } else {
                                response.status(400);
                                console.log(error_2);
                                response.json({
                                    message: "Invalid Credential given !",
                                });
                            }
                        }
                    );
                } else {
                    response.status(400);
                    console.log(error_1);
                    response.json({
                        message: "User not found !",
                    });
                }
            }
        );
    } else {
        res.status(400);
        console.log(request.body);
        res.json({
            message: "Invalid Credential given !",
        });
    }
};

exports.get_users_team = (request, response) => {
    User.find({ team_id: request.params.team_id }, (error, users) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur.",
            });
        } else {
            response.status(200);
            response.json(users);
        }
    });
};
