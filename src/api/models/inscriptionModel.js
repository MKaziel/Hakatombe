const mongoose = require('mongoose')
const Schema = mongoose.Schema

let inscirptionSchema = new Schema({
    project_id: {
        type: String,
    },
    team_id:{
        type:String,
    }
    
})