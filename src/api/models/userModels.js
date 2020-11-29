const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Modèle de l'utilisateur
 */
let userSchema = new Schema({
    email: {
        type: String,
        required: "L'email est requis",
        unique: true
    },
    password: {
        type: String,
        required: "Le mdp est requis"
    },
    lname: {
        type: String,
        required: "Merci d'indiqué le nom de la personne"
    },
    fname: {
        type: String,
        required: "Merci d'indiqué le nom de la personne"
    },
    school_id:{
        type:String
    },
    team_id:{
        type:String
    }
});

module.exports = mongoose.model('User', userSchema);