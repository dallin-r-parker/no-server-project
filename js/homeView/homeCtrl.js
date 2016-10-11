angular.module('readingApp').controller('homeCtrl', function($scope, mainService) {

    $scope.getImg = mainService.getImg();

    $(function(){
      $('#anchor-one').click(function(){
          $('html, body').animate({
              scrollTop: $('#center-anchor-wrapper').offset().top},
              2000
          );
      return false;
      });
  });

  });
