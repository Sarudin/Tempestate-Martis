angular.module('app').controller('buttonCtrl', function($scope, weatherService) {
  $scope.terrestrialDates;

  $scope.getWeather = function() {
    weatherService.getAll().then(response => {
      $scope.terrestrialDates = response;
    });
  }
});
