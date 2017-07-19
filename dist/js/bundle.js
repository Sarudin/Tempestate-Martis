'use strict';

angular.module('app', ['ui.router']);
'use strict';

angular.module('app').controller('buttonController', ["$scope", "weatherService", function ($scope, weatherService) {
  $scope.terrestrialDates = "null";

  $scope.getStuff = function () {
    weatherService.getAll().then(function (response) {
      $scope.terrestrialDates = response;
    });
  };
}]);
'use strict';

angular.module('app').service('weatherService', ["$http", function ($http) {
  this.getAll = function () {
    return $http.get('/api/getAll').then(function (response) {
      console.log("SHIT!!!");
      return response;
    });
  };
}]);
//# sourceMappingURL=bundle.js.map
