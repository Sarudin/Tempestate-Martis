angular.module('app').service('weatherService', function($http) {
  this.getAll = () => {
    return $http.get('/api/getAll').then(response => {
      console.log("SHIT!!!");
      return response;
    })
  }
})
