// Dependencies
let express = require('express');
let app = express();
let path = require('path');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

// Create a mongoose connection
mongoose.connect('mongodb://127.0.0.1:27017/movies');

// Load custom dependencies
let routes = require('./routes/all');

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Configure Body Parser and Cookie Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Use the public folder for static files
app.use(express.static(path.join(__dirname, 'public')));

// Creation of the routes 
app.get('/', routes.index);
app.get('/movies', routes.getMovies);
app.post('/movie', routes.postMovie);
app.delete('/movie/:id', routes.removeMovie);

//Set port to env.Port or default to 8080
app.set('port', process.env.PORT || 8080);

module.exports = app