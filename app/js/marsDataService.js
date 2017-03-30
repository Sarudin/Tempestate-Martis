angular.module('tempeMartis').service('marsDataService', function($http) {

  this.getData = function(url) {
    var archiveUrl = "http://marsweather.ingenology.com/v1/archive/";
    var latestUrl = "http://marsweather.ingenology.com/v1/latest/";

    return $http.get(url).then(function(response) {
      if (response.status === 200) {
        if (url === archiveUrl) {
          return response.data.results;
        }
        else if (url === latestUrl){
          return response.data.report;
        }
      }
    })
  }
})
