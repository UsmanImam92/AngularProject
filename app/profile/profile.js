'use strict';

angular.module('myApp.profile',[])

    .controller('ProfileController', ['$scope','$http',function($scope, $http)
    {
        $http.get('http://localhost:3000/profile')
            .success(function(response)
            {
                console.log(response);
                $scope.posts = response;
            });
    }]);



