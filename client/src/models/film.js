var Film = function(options){ // constructor
  this.title = options.title;
  this.actors = options.actors;
  this.reviews = options.reviews || [];
}

Film.prototype = {
  addReview: function(review){
    this.reviews.push(review)
  }
}

module.exports = Film;