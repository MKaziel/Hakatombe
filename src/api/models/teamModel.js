const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let teamSchema = new Schema({
    name: {
        type: String,
        required: "Le nom est requis"
    }    
});

module.exports = mongoose.model('Team',teamSchema );