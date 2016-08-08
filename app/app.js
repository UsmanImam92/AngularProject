'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'ng-token-auth',
    'myApp.view1',
    'myApp.signup',
    'myApp.comment',
    'myApp.profile',
    'myApp.post',
    'myApp.login',
    'myApp.feed',
    'myApp.version',
    'auth0',
    'angular-storage',
    'angular-jwt',
    'ngMaterial'
]).
config(['$locationProvider', '$routeProvider','$authProvider', function($locationProvider, $routeProvider, $authProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider
        .when('/feed', {
            templateUrl: 'feed/feed.html',
            resolve: {
                auth: function($auth) {
                    return $auth.validateUser();
                }
            },
            controller: 'FeedController'
        })
        .when('/login', {
            templateUrl: 'login/login.html',
            controller: 'LoginController'
        })
        .when('/signup', {
            templateUrl: 'signup/signup.html',
            controller: 'SignupCtrl'
        })
        .when('/profile',{
            templateUrl: 'profile/profile.html',
            resolve: {
                auth: function($auth) {
                    return $auth.validateUser();
                }
            },
            controller: 'ProfileController'
        })
        .otherwise({redirectTo: '/login'});

    $authProvider.configure({
        apiUrl:'http://localhost:3000'
    });


}]);
