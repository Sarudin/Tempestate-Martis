'use strict';

angular.module('app', ['ui.router']);
'use strict';

angular.module('app').controller('buttonCtrl', ["$scope", "weatherService", function ($scope, weatherService) {
  $scope.terrestrialDates;

  $scope.getWeather = function () {
    weatherService.getAll().then(function (response) {
      $scope.terrestrialDates = response;
    });
  };
}]);
'use strict';

angular.module('app').service('weatherService', ["$http", function ($http) {
  this.getAll = function () {
    return $http.get('/api/getAll').then(function (response) {
      console.log('response from service = ' + response.data);
      return response.data;
    });
  };
}]);
//# sourceMappingURL=bundle.js.map
