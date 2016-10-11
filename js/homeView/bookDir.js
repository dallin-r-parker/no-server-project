angular.module('readingApp')
  .directive('bookDir', function() {

    return {
      restrict: 'E',
      templateUrl: './js/homeView/bookDirTmpl.html',
      scope: {

      },
      controller: function($scope, bookRecommendationService){
        $scope.addRecommendation = function(recommendationInput){
          if (!recommendationInput) {
            $('recommendation-submit').on('click', '', function(event) {
              event.preventDefault();
              /* Act on the event */
            });
          }
          else {
            bookRecommendationService.addBook(recommendationInput);
            $scope.recommendationInput = '';
          }
        }
      }
    }
  });
  //restrict with A,E, or AE
