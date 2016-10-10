angular.module('readingApp')
  .directive('homeTypingDir', function() {

    return {
      restrict: 'E',
      templateUrl: './js/homeTypingDir/homeTypingTmpl.html',
      scope: {

      },
      link: function(scope, element, attribute) {

      $("#home-typing-text").typed({
        strings: ["RAD", "COOL", "FUN", "SMART", "AWESOME","RADICAL!"],
        typeSpeed: 50
          });
              //<-- End of jQuery script
      }
    }
  });
