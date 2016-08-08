'use strict';

angular.module('myApp.comment',['ngRoute'])

    .controller('CommentController', ['$scope','$http',function($scope, $http)
    {
        $scope.commentModel = {};

        var data = {};
        data.comment = $scope.commentModel;
        $scope.onSubmit = function(post_id) {

            console.log("Comment Controller Clicked")
            $http.post('http://localhost:3000/posts/'+ post_id +'/comments',data)
                .success(function (data) {
                    console.log(data)
                })
                .error(function()
                {
                    console.log(post_id);
                });
        };



        $scope.getComments = function(post_id){
            $http.get('http://localhost:3000/posts/'+ post_id +'/comments')
                .success(function(response)
                {
                    console.log(response);
                    $scope.comments = response;
                });
        }


    }]);




