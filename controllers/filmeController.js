const main = require("../database/conn");
const {Filme: FilmeModel, Filme } = require("../models/Filme");

const filmeController = {
    readAll: async(req, res)=>{
        let results = await FilmeModel.find({});
        res.send(results).status(200);
    },
}

module.exports = filmeController;