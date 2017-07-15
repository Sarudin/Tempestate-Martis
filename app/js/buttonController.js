angular.module('buttonController', ($scope, weatherService) => {
  $scope.terrestrialDates;

  weatherService.getAll().then(response => {
    $scope.terrestrialDates = response;
  });
})
