// container for GA
var _gaq = _gaq || [];
(function() {
   var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
   ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
   var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

angular.module('ga.tracker', [])
  .directive("gaEvent", function () {
    return {
      restrict: 'A',
      scope: {
        eventName: "@",
        eventValue: "@",
        profileId: "@"
      },
      link: function(scope, element, attrs) {
        element.bind('click',function(){
          _gaq.push(['_setAccount', scope.profileId]);
          _gaq.push(['_trackEvent', scope.eventName, scope.eventValue,,, false]);
        });
      }
    };
  })
  .directive("gaPageview", ['$location', function ($location) {
    return {
      restrict: 'A',
      scope: {
        profileId: "@"
      },
      link: function(scope, element, attrs) {
        _gaq.push(['_setAccount', scope.profileId]);
        _gaq.push(['_trackPageview', $location.path()]);
      }
    };
  }]);