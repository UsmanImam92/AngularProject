'use strict';

angular.module('myApp.login',['ng-token-auth'])
    
    .controller('LoginController', ['$rootScope','$scope', '$auth','$location',function($rootScope,$scope, $auth, $location) {
        $scope.handleLoginBtnClick = function() {
            $auth.submitLogin($scope.loginForm)
                .then(function(resp) {

                })
                .catch(function(resp) {
                    // handle error response
                    console.log(resp);
                });
        };


        $rootScope.$on('auth:login-success', function(ev, user) {
            $location.path('/feed');
        });
    }]);




