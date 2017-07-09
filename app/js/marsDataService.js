angular.module('tempeMartis').service('marsDataService', function($http) {

  this.getData = function(url) {
    return $http('api/getWeather').then(response) {
      return response.data;
    }
  }
})
