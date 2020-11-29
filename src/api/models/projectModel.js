const mongoose = require('mongoose')
const Schema = mongoose.Schema

/**
 * Modèle du projet
 */
let projectSchema = new Schema({
    name: {
        type: String,
        required: "Le nom du projet est requis"
    },
    description: {
        type:String,
        required:"Merci mettre une description"
    },
    answer_1:{
        type:String,
        required:"Merci de répondre à toutes les questions."
    }, 
    answer_2:{
        type:String,
        required:"Merci de répondre à toutes les questions."
    } ,
    answer_3:{
        type:String,
        required:"Merci de répondre à toutes les questions."
    } ,
    answer_4:{
        type:String,
        required:"Merci de répondre à toutes les questions."
    } ,
    answer_5:{
        type:String,
        required:"Merci de répondre à toutes les questions."
    },
    questionnaire_id:{
        type:String,
    },
    team_id:{
        type:String,
    }
});

module.exports = mongoose.model('Project', projectSchema);