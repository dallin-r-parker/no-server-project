angular.module('readingApp')
  .directive('typingDir', function() {

    return {
      restrict: 'E',
      templateUrl: './js/becomeNinjaView/typingDirTmpl.html',
      scope: {

      },
      link: function (scope, element, attribute){

      $("#typing-text").typed({
        strings: ["So you want to be a Ninja?", "Do you have what it takes?",  "Follow the steps "],
        typeSpeed: 10
          });
        //<-- End of jQuery script
      }
    }
  });
