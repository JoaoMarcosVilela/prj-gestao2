const router = require("express").Router()
const filmeController = require("../controllers/filmeController");

router.route("/filmes").get((req, res)=> filmeController.readAll(req,res));
router.route("/filmes").post((req, res)=> filmeController.create(req,res));

module.exports = router;