'use strict';

angular.module('app', ['ui.router']);
'use strict';

angular.module('buttonController', ["$scope", "weatherService", function ($scope, weatherService) {
  $scope.terrestrialDates;

  $scope.getStuff = function () {
    weatherService.getAll().then(function (response) {
      $scope.terrestrialDates = response;
    });
  };
}]);
'use strict';

angular.module('weatherService', ["$http", function ($http) {

  undefined.getAll = function () {
    return $http.get('/api/getAll').then(function (response) {
      console.log("response in service = " + response);
      return response;
    });
  };
}]);
//# sourceMappingURL=bundle.js.map
