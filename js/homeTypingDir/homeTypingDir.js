angular.module('readingApp')
  .directive('homeTypingDir', function() {

    return {
      restrict: 'E',
      templateUrl: './js/homeTypingDir/homeTypingTmpl.html',
      scope: {

      },
      link: function(scope, element, attribut) {

      $("#home-typing-text").typed({
        strings: ["RAD", "COOL", "FUN"],
        typeSpeed: 0
          });
              //<-- End of jQuery script
      }
    }
  });
  //restrict with A,E, or AE
