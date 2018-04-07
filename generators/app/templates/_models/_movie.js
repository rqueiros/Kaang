//_model/_movie.js
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let movieSchema = new Schema({
    title:  String,
    year: Number,
    genre: String,
    votes: Number
  });

module.exports.movies = mongoose.model('Movie', movieSchema);