const middleware = require('../middlewares/jwtMiddleware');
const Event = require('../models/eventModel')

/**
 * 
 * @param {*} request 
 * @param {*} response
 * Listez tous les évènements 
 */
exports.list_all_event = (request,response) => {
    
    Event.find({}, (error, events) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur : Event / Get all."
            })
        } else {
            response.status(200);
            response.json(events)
        }
    })
}

/**
 * 
 * @param {*} request 
 * @param {*} response
 * Création d'un évènement en fonction du body 
 */
exports.create_an_event = (request,response) => {
    let new_event = new Event(request.body);
    new_event.save((error, event) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur : Event / Create."
            })
        } else {
            response.status(201);
            response.json(event)
        }
    })
}

/**
 * 
 * @param {*} request 
 * @param {*} response
 * Récupéré un event en fonction de son id 
 */
exports.get_an_event = (request,response) => {
    Event.findById(request.params.event_id, (error, event) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur : Event / Get One."
            })
        } else {
            response.status(200);
            response.json(event)
        }
    })}

/**
 * 
 * @param {*} request 
 * @param {*} response
 * Mettre à jour un évènement récupéré via l'ID depuis un body 
 */
exports.update_an_event = (request,response) => {
    Event.findByIdAndUpdate(request.params.event_id, request.body, {
        new: true
    }, (error, event) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur : Event / Update."
            })
        } else {
            response.status(200);
            response.json(event)
        }
    })
}

/**
 * 
 * @param {*} request 
 * @param {*} response
 * Supprimer un évènement depuis l'ID
 */
exports.delete_an_event = (request,response) => {
    Event.findByIdAndRemove(request.params.event_id, (error, event) => {
        if (error) {
            response.status(500);
            console.log(error);
            response.json({
                message: "Erreur serveur : Event / Delete."
            })
        } else {
            response.status(200);
            response.json({
                message: "Evenement supprimé !"
            })
        }
    })}