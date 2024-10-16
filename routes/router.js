const router = require("express").Router()
const filmesService = require("./filmes")

router.use("/",filmesService);

module.exports = router;