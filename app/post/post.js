'use strict';

angular.module('myApp.post',['ngRoute'])

    .controller('FeedController', ['$scope','$http',function($scope, $http)
    {
        $http.get('http://localhost:3000/posts')
            .success(function(response)
            {
                console.log(response);
                $scope.posts = response;
            });

    }])

    .controller('PostController', ['$scope','$http','$location',function($scope, $http,$location)
    {
        $scope.postModel = {};

        var data = {};
        data.post = $scope.postModel;
        $scope.onSubmit = function() {

            console.log("Post Controller Clicked")
            $http.post('http://localhost:3000/posts',data)
                .success(function (data) {
                   console.log(data)
                })
                .error(function()
                {
                    console.log("error")
                });


        };
    }]);

