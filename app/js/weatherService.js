angular.module('weatherService', ($http) => {

  this.getAll = function() {
    return $http.get('/api/getAll').then(response => {
      console.log(response);
      return response;
    })
  }
})
