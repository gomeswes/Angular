var myApp = angular.module("myApp", []);



myApp.controller("mainController", ['$scope', '$log', '$timeout', '$filter', function($scope, $log, $timeout, $filter) {
    "use strict";
    $scope.handle = "";
    $scope.lowercasehandle = function(){
        return $filter('lowercase')($scope.handle);
    };
}]);


