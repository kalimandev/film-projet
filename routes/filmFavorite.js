const express = require("express")
const router = express.Router();
const controller = require("../controllers/filmFavoriteController")

router
    .route("/add-to-favorite/:id")
    .get(controller.getFavoris)

router
    .route("/:id")
    .post(controller.addFavoris)

router
    .route("/add-to-favorite/:id/:idFilm")
    .get(controller.isInFavoris)


module.exports = router;