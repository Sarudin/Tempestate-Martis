angular.module('buttonController', ($scope, weatherService) => {
  $scope.terrestrialDates;

  $scope.getStuff = function() {
      weatherService.getAll().then(response => {
      $scope.terrestrialDates = response;
    });
  }
});
