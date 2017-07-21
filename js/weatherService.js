angular.module('app').service('weatherService', function($http) {
  this.getAll = () => {
    return $http.get('/api/getAll').then(response => {
      console.log("response in service = " + response.data);
      return response.data;
    })
  }
})
