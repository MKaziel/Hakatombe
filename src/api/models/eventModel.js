const mongoose = require('mongoose')
const Schema = mongoose.Schema

let eventSchema = new Schema({
    name: {
        type: String,
        required: "Le nom de l'évènement est requis"
    },
    location: {
        type:String,
        required:"Merci de donné la localisation"
    },
    description:{
        type:String,
        required: "Veuillez décrire l'évènement"
    }
});

module.exports = mongoose.model('Event', eventSchema);