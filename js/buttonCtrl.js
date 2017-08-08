angular.module('app').controller('buttonCtrl', function($scope, weatherService) {
  $scope.terrestrialDates;
  $scope.page = 1;

  $scope.getWeather = function() {
    weatherService.getAll($scope.page).then(response => {
      $scope.terrestrialDates = response;
    });
  }
});
