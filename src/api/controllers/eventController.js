const middleware = require('../middlewares/jwtMiddleware');
const Event = require('../models/eventModel')

exports.list_all_event = (request,response) => {
    Event.find({}, (error, events) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur."
            })
        } else {
            response.status(200);
            response.json(events)
        }
    })}

exports.create_an_event = (request,response) => {
    let new_event = new Event(request.body);
    new_event.save((error, event) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur."
            })
        } else {
            response.status(201);
            response.json(event)
        }
    })
}

exports.get_an_event = (request,response) => {
    Event.findById(request.params.event_id, (error, event) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur."
            })
        } else {
            response.status(200);
            response.json(event)
        }
    })}

exports.update_an_event = (request,response) => {
    Event.findByIdAndUpdate(request.params.event_id, request.body, {
        new: true
    }, (error, event) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur."
            })
        } else {
            response.status(200);
            response.json(event)
        }
    })
}

exports.delete_an_event = (request,response) => {
    Event.findByIdAndRemove(request.params.event_id, (error, event) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur."
            })
        } else {
            response.status(200);
            response.json({
                message: "Evenement supprimé !"
            })
        }
    })}