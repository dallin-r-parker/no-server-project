angular.module('readingApp').service('mainService', function($http) {
    var bookImg = [
        {
          img: './img/book1.JPG'
        },
        {
          img: './img/book2.JPG'
        },
        {
          img: './img/book3.JPG'
        },
        {
          img: './img/book4.JPG'
        },
        {
          img: './img/book5.JPG'
        },
        {
          img: './img/book6.JPG'
        },
        {
          img: './img/book7.JPG'
        },
        {
          img: './img/book8.JPG'
        },
        {
          img: './img/book9.JPG'
        }
  ]

      this.getImg = function(){
        console.log(bookImg);
        return bookImg;
      }





});
