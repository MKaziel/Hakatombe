module.exports = (server) => {
    const userController = require("../controllers/userController");
    const jwtMiddleware = require("../middlewares/jwtMiddleware");

    server
        .route("/users")
        //admin
        .get(userController.list_all_users);

    server
        .route("/users/register")
        //only guest
        .post(userController.create_an_user);

    server
        .route("/users/login")
        //only guest
        .post(userController.login_an_user);

    server
        .route("/teams/:team_id/users")
        //users
        .get(userController.get_users_team);

    server
        .route("/users/:user_id")
        //users
        .put(userController.update_user);
};

var express = require("express");
var router = express.Router();

// GET School
router.get("/", function (req, res, next) {
    let dataArray = [
        { name: "Paris" },
        { name: "Saint-Quentin en Yvelines" },
        { name: "Marne-la-Vallée" },
    ];
    res.json({
        data: dataArray,
    });
});

module.export = router;
