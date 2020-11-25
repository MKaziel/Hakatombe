const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let teamSchema = new Schema({
    name: {
        type: String,
        required: "Le nom est requis"
    },
    membre_1_id: {
        type: String,
        required: "Il faut au moins un capitaine"
    },
    membre_2_id: {
        type: String,
    },
    membre_3_id: {
        type: String,
    },
    membre_4_id: {
        type: String,
    },
    membre_5_id: {
        type: String,
    },
    
});

module.exports = mongoose.model('Team',teamSchema );