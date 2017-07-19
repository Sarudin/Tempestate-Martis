angular.module('app').controller('buttonController', ($scope, weatherService) => {
  $scope.terrestrialDates = "null";

  $scope.getStuff = function() {
    weatherService.getAll().then(response => {
      $scope.terrestrialDates = response;
    });
  }
});
