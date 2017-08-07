//since we don't have a database we'll use our front end models at the moment
var express = require('express')
var filmRouter = new express.Router() ;


var films = require('../client/src/models/films')();
var film = require('../client/src/models/film');
var review = require('../client/src/models/review'); 



filmRouter.post('/', function(req, res) { // to add a film
  films.push(req.body.film);
  res.json({data: films});
})


filmRouter.put('/:id', function(req, res) { // to update a film
  films[req.params.id] = req.body.film;
  res.json({data: films});
})


filmRouter.delete('/:id', function(req, res) { // to delete a film
  films.splice(req.params.id, 1);
  res.json({data: films});
})


filmRouter.get('/:id', function(req, res) { // get / display a film
  res.json({ data: films[req.params.id] }); 
})

filmRouter.get('/', function(req, res) {  // gets all films inside the array films
  res.json({data: films});
})

filmRouter.use('/films', require('../src/models/films'));

module.exports = filmRouter;