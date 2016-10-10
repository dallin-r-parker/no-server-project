angular.module('readingApp').controller('becomeNinjaCtrl', function($scope) {

  $(function(){
      $('#anchor-one').click(function(){
          $('html, body').animate({
              scrollTop: $('#step1-color-container').offset().top},
              2000
          );
      return false;
      });
  });

});
