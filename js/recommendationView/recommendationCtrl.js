angular.module('readingApp').controller('recommendationCtrl', function($scope, bookRecommendationService) {


    $scope.test = 'Recommendation View';
    $scope.books = bookRecommendationService.bookRecommendation;
});
