const mongoose = require('mongoose')
const Schema = mongoose.Schema

let questionnaireSchema = new Schema({
    name: {
        type: String,
        required: "Le nom du questionnaire est requis"
    },
    question_1: {
        type: String,
        required:"Merci de remplir toutes les questions"
    },
    question_2:{
        type: String,
        required:"Merci de remplir toutes les questions"
    },
    question_3:{
        type: String,
        required:"Merci de remplir toutes les questions"
    },
    question_4:{
        type: String,
        required:"Merci de remplir toutes les questions"        
    },
    question_5:{
        type: String,
        required:"Merci de remplir toutes les questions"
    },
});

module.exports = mongoose.model('Questionnaire', questionnaireSchema);