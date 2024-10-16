const router = require("express").Router()
const filmeController = require("../controllers/filmeController");

router.route("/filmes").get((req, res)=> filmeController.readAll(req,res));

module.exports = router;