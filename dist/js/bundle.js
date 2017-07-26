'use strict';

angular.module('app', ['ui.router']);
'use strict';

angular.module('app').controller('buttonCtrl', ["$scope", "weatherService", function ($scope, weatherService) {
  $scope.terrestrialDates;
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
<<<<<<< HEAD
      console.log('response from service = ' + response.data);
=======
      console.log("response in service = " + response.data);
>>>>>>> 0b55d2b9a4b9ae5f101959cad039c2695bc0a297
      return response.data;
    });
  };
}]);
//# sourceMappingURL=bundle.js.map
