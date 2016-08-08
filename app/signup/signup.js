'use strict';

angular.module('myApp.signup', ['ng-token-auth'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/signup', {
            templateUrl: 'signup/signup.html',
            controller: 'SignupCtrl'
        });

    }])

    .controller('SignupCtrl', ['$scope','$auth','$location', function($scope, $auth,$location) {
        $scope.handleRegBtnClick = function() {
            $auth.submitRegistration($scope.registrationForm)
                .then(function(resp) {
                    $location.path('/login.html');
                })
                .catch(function(resp) {
                    console.log(resp);
                });
        };

    }])

    .controller('SignOutCtrl', function($scope, $auth) {
        $scope.handleSignOutBtnClick = function() {
            $auth.signOut()
                .then(function(resp) {
                    // handle success response
                })
                .catch(function(resp) {
                    // handle error response
                });
        };
    });