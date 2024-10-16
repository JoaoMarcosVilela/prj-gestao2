const main = require("../database/conn");
const {Filme: FilmeModel, Filme } = require("../models/Filme");

const filmeController = {
    readAll: async(req, res)=>{
        let results = await FilmeModel.find({});
        res.send(results).status(200);
    },
    create: async(req, res)=>{
        try {
            const filme = {
                nome: req.body.nome
            };
            const response = await FilmeModel.create(filme);
            res.status(201).json({response, msg:"Usuário cadastrado!"});
        } catch (error) {
            console.log(error);
        }
    },
}

module.exports = filmeController;