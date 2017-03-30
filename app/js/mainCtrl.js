angular.module('tempeMartis').controller('mainCtrl', function($scope, marsDataService) {

  $scope.weatherData = "";
  $scope.url = "http://marsweather.ingenology.com/v1/latest/"

  $scope.getWeatherData = function(url) {
    marsDataService.getData($scope.url).then(function(response) {
      $scope.weatherData = response;
    });
  }

  $scope.getWeatherData();
});
