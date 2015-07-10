var ismt = angular.module('ismt', ['ngRoute',]);

ismt.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl : '../pages/home.html',
        controller : 'homeController'
        })
        
})
