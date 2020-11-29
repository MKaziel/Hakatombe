const mongoose = require('mongoose')
const Schema = mongoose.Schema

let schoolSchema = new Schema({
    name: {
        type: String,
        required: "Le nom de l'école est requis",
        unique: true
    },
    location: {
        type:String,
        required:"Merci de donné la localisation"
    }
});

module.exports = mongoose.model('School', schoolSchema);