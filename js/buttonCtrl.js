angular.module('app').controller('buttonCtrl', function($scope, weatherService) {
  $scope.allWeather;
  $scope.latestWeather;
  $scope.weatherByDate;
  $scope.page = 1;

  $scope.getAllWeather = function() {
    weatherService.getAll($scope.page).then(response => {
      $scope.allWeather = response;
    });
  }

  $scope.nextPage = function() {
    $scope.page++;
    weatherService.getAll($scope.page).then(response => {
      $scope.allWeather = response;
    });
  }

  $scope.previousPage = function() {
    if ($scope.page <= 1) {
      $scope.page = 1;
    }
    else {
      $scope.page--;
    }
    weatherService.getAll($scope.page).then(response => {
      $scope.allWeather = response;
    });
  }

  $scope.getLatestWeather = function() {
    weatherService.getLatest().then(response => {
      $scope.latestWeather = response;
    });
  }

  $scope.getWeatherByDate = function() {
    weatherService.getByDate().then(response => {
      $scope.weatherByDate = response;
    });
  }
});
