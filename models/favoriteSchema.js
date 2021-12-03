const mongoose = require('mongoose');
const Schema= mongoose.Schema;

const favoriteFilmSchema = Schema({
    idFilm: { type: String },
    idUser: { type: String },
    poster_path: { type: String },
    title: { type: String },
});

module.exports = mongoose.model('Favorite', favoriteFilmSchema);