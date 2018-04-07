//_routes/_all.js
const Movie = require('../models/movie').movies

// Renders the main page (index.ejs)
module.exports.index = function(req, res) {
  res.render('index')
}


/**
 * @api {get} /movies Request movies data
 * @apiName GetMovies
 * @apiGroup Movies
 *
 * @apiSuccess {String} title Title of the movie.
 * @apiSuccess {Number} year Year od creation of the movie.
 * @apiSuccess {String} genre Genre of the movie.
 * @apiSuccess {Number} votes Score of the movie.
 * 
 * * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *      {
 *       "title": "Memento",
 *       "lastname": 2000,
 *       "genre": "Thriller",
 *       "votes": 23
 *      },
 *      ...
 *     ]
 */
module.exports.getMovies = function(req, res) {
  Movie.find().exec(function(err, movie) {
    if (err) return res.send(err)
    return res.json(movie)
  })
}


/**
 * @api {post} /movies Create a Movie resource
 * @apiName newMovie
 * @apiGroup Movies
 *
 * @apiParam {json} movie The movie resource to create.
 *
 * @apiSuccess {json} movie The movie resource created. 
 */
module.exports.postMovie = function(req, res) {
  Movie.create(req.body, function(err, movie) {
    if (err) return res.send(err)
    return res.json(movie)
  })
}

/**
 * @api {delete} /novie/:id Remove a specific movie
 * @apiName removeMovie
 * @apiGroup Movies
 *
 * @apiParam {Number} id Movie ID to remove.
 *
 * @apiSuccess {json} movie The movie resource removed.
 */
module.exports.removeMovie = function(req, res) {
    let movieId = req.params.id
    Movie.find({'_id': movieId}).remove().exec(function(err, movie) {
      if (err) return res.send(err)
      return res.json(movie)
    })
  }


