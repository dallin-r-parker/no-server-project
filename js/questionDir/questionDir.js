angular.module('readingApp')
  .directive('questionDir', function() {

    return {
      restrict: 'E',
      templateUrl: './js/questionDir/questionDirTmpl.html',
      scope: {

      },
      link: function(scope, element, attribute){
        $('#footer-ninja-logo').on('click', '.hide-modal', function() {
            $('.hide-modal').removeClass('.hide-modal');
        });
      }
    }

  });
  //restrict with A,E, or AE
