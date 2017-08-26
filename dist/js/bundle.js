'use strict';

angular.module('app', ['ui.router']).config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: '/',
    templateUrl: '../templates/homeTmpl.html'
  }).state('getAll', {
    url: '/getAll',
    templateUrl: '../templates/getAllTmpl.html'
  }).state('showAll', {
    url: '/showAll',
    templateUrl: '../templates/showAllTmpl.html'
  }).state('getByDate', {
    url: '/getByDate',
    templateUrl: '../templates/getByDateTmpl.html'
  }).state('showByDate', {
    url: '/showByDate',
    templateUrl: '../templates/showByDateTmpl.html'
  }).state('getLatest', {
    url: '/getLatest',
    templateUrl: '../templates/getLatestTmpl.html'
  }).state('showLatest', {
    url: '/showLatest',
    templateUrl: '../templates/showLatestTmpl.html'
  });

  $urlRouterProvider.otherwise('/');
}]);
'use strict';

angular.module('app').controller('buttonCtrl', ["$scope", "weatherService", function ($scope, weatherService) {
  $scope.allWeather;
  $scope.latestWeather;
  $scope.weatherByDate;
  $scope.page = 1;

  $scope.getAllWeather = function () {
    weatherService.getAll($scope.page).then(function (response) {
      $scope.allWeather = response;
    });
  };

  $scope.nextPage = function () {
    $scope.page++;
    weatherService.getAll($scope.page).then(function (response) {
      $scope.allWeather = response;
    });
  };

  $scope.previousPage = function () {
    if ($scope.page <= 1) {
      $scope.page = 1;
    } else {
      $scope.page--;
    }
    weatherService.getAll($scope.page).then(function (response) {
      $scope.allWeather = response;
    });
  };

  $scope.getLatestWeather = function () {
    weatherService.getLatest().then(function (response) {
      $scope.latestWeather = response;
    });
  };

  $scope.getWeatherByDate = function () {
    weatherService.getByDate().then(function (response) {
      $scope.weatherByDate = response;
    });
  };
}]);
'use strict';

(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing

    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 48
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 48
    });

    // Closes responsive menu when a link is clicked
    $('.navbar-collapse>ul>li>a').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Collapse the navbar when page is scrolled
    $(window).scroll(function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    });

    // Scroll reveal calls
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

    // Magnific popup calls
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });
})(jQuery); // End of use strict
"use strict";

/*!
 * Start Bootstrap - Createive v4.0.0-beta (http://startbootstrap.com/template-overviews/creative)
 * Copyright 2013-2017 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-creative/blob/master/LICENSE)
 */
!function (a) {
  "use strict";
  a('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
      var e = a(this.hash);if ((e = e.length ? e : a("[name=" + this.hash.slice(1) + "]")).length) return a("html, body").animate({ scrollTop: e.offset().top - 48 }, 1e3, "easeInOutExpo"), !1;
    }
  }), a("body").scrollspy({ target: "#mainNav", offset: 48 }), a(".navbar-collapse>ul>li>a").click(function () {
    a(".navbar-collapse").collapse("hide");
  }), a(window).scroll(function () {
    a("#mainNav").offset().top > 100 ? a("#mainNav").addClass("navbar-shrink") : a("#mainNav").removeClass("navbar-shrink");
  }), window.sr = ScrollReveal(), sr.reveal(".sr-icons", { duration: 600, scale: .3, distance: "0px" }, 200), sr.reveal(".sr-button", { duration: 1e3, delay: 200 }), sr.reveal(".sr-contact", { duration: 600, scale: .3, distance: "0px" }, 300), a(".popup-gallery").magnificPopup({ delegate: "a", type: "image", tLoading: "Loading image #%curr%...", mainClass: "mfp-img-mobile", gallery: { enabled: !0, navigateByImgClick: !0, preload: [0, 1] }, image: { tError: '<a href="%url%">The image #%curr%</a> could not be loaded.' } });
}(jQuery);
'use strict';

angular.module('app').service('weatherService', ["$http", function ($http) {
  this.getAll = function (page) {
    return $http.get('/api/getAll/' + page).then(function (response) {
      return response.data;
    });
  };

  this.getLatest = function () {
    return $http.get('/api/getLatest').then(function (response) {
      return response.data;
    });
  };

  this.getByDate = function () {
    return $http.get('/api/getByDate').then(function (response) {
      return response.data;
    });
  };
}]);
//# sourceMappingURL=bundle.js.map
