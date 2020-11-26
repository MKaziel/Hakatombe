const middleware = require('../middlewares/jwtMiddleware');
const School = require('../models/schoolModel');

exports.list_all_school = (request,response) => {
    School.find({}, (error, schools) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur."
            });
        } else {
            response.status(200);
            response.json(schools);
        }
    });
}

exports.create_a_school = (request,response) => {
    let new_school = new School(request.body);
    new_school.save((error, school) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur."
            });
        } else {
            response.status(201);
            response.json(school);
        }
    });
}

exports.get_a_school = (request,response) => {
    School.findById(request.params.school_id, (error, school) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur."
            });
        } else {
            response.status(200);
            response.json(school);
        }
    });
}

exports.update_a_school = (request,response) => {
    School.findByIdAndUpdate(request.params.school_id,request.body, {new:true}, (error, school) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur."
            });
        } else {
            response.status(200);
            response.json(school);
        }
    });
}

exports.delete_a_school = (request,response) => {
    School.findByIdAndDelete(request.params.school_id, (error, result) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur."
            });
        } else {
            response.status(200);
            response.json(result);
        }
    });
}