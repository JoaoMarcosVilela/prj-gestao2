const mongoose = require("mongoose");
const{Schema} = mongoose;

const filmeSchema = new Schema({
    nome:{
        type: String,
        require: true,
    }
}, 
);

const Filme = mongoose.model("Filme", filmeSchema);
module.exports = {
    Filme,
    filmeSchema,
};