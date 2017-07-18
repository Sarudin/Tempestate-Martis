angular.module('app').service('weatherService', function($http) {
  this.getAll = function() {
    return $http.get('/api/getAll').then((response) => {
      console.log("response in service = " + response);
      return response;
    })
  }
})
