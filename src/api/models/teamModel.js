const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let teamSchema = new Schema({
    name: {
        type: String,
        required: "Le nom est requis",
        unique: true
    },
    leader: {
        type: String
    }  
});

module.exports = mongoose.model('Team',teamSchema );