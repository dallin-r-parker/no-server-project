angular.module('readingApp').controller('homeCtrl', function($scope, mainService) {

    $scope.getImg = mainService.getImg();

});
