'use strict';

angular.module('myApp.view1',[])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Controller'
  });
}])

    .controller('View1Controller', ['$scope','$http', function($scope, $http)
    {

          $http.get('http://localhost:3000/all')
              .success(function(response)
              {
                  $scope.persons = response;

              });
    }]);



