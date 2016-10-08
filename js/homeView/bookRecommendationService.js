angular.module('readingApp').service('bookRecommendationService', function($http) {

  this.bookRecommendation = [];

  this.addBook = function(book){
    this.bookRecommendation.push(book);
    console.log(this.bookRecommendation);
  }


});
