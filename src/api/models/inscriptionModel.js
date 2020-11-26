const mongoose = require('mongoose')
const Schema = mongoose.Schema

let inscriptionSchema = new Schema({
    project_id: {
        type: String,
    },
    team_id:{
        type:String,
    },
    event_id:{
        type:String,
    }    
});

module.exports = mongoose.model('Inscription', inscriptionSchema);