'use strict';

angular.module('myApp.feed',['ngRoute'])

    .controller('FeedController', ['$scope','$http',function($scope, $http)
    {
        $http.get('http://localhost:3000/posts')
            .success(function(response)
            {
                console.log(response);
                $scope.posts = response;
            });

    }]);
