const express = require("express");
const {protected} = require("../controller/authController.js")
const {createMovie,updateMovie,deleteMovie,displaySinglemovie,getRandomMovie,displayAllmovie,searchMovie} = require("../controller/movieController.js")
const router = express.Router();

router.post("/create",protected,createMovie)
router.patch("/update/:id",protected,updateMovie)
router.delete("/delete/:id",protected,deleteMovie)
router.get("/singlefind/:id",displaySinglemovie)
router.get("/random",getRandomMovie)
router.get("/allmovie",protected,displayAllmovie);
router.get("/search/:key",searchMovie)
module.exports = router;