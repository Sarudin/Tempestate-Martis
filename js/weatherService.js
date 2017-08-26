angular.module('app').service('weatherService', function($http) {
  this.getAll = (page) => {
    return $http.get('/api/getAll/' + page).then(response => {
      return response.data;
    })
  }

  this.getLatest = () => {
    return $http.get('/api/getLatest').then(response => {
      return response.data;
    })
  }

  this.getByDate = () => {
    return $http.get('/api/getByDate').then(response => {
      return response.data;
    })
  }
})
