var myApp = angular.module("myApp", []);



myApp.controller("mainController", ['$scope', '$log', '$timeout', '$filter', function($scope, $log, $timeout, $filter) {
    "use strict";
    $scope.handle = "";
    $scope.characters = 5;
    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
    };
    
    $scope.$watch('handle', function(newValue, oldValue) {
        $log.debug(oldValue);
        $log.debug(newValue);
    });
    
    setTimeout(function(){
        $scope.$apply(function(){
            $scope.handle = 'handlechanged';
            $log.info('scope changed');
        });
    }, 3000);
    
    $timeout(function(){
        $scope.handle = "again-insidescope";
        $log.info('inside scope');
    }, 5000);
    
    $scope.rulez = 
    [
        { rulename: 'Must be repeated' },
        {rulename: 'And i will repeat again'},
        {rulename: 'And again'},
        {rulename: 'And then again'},
        {rulename: 'Ok! No more rulez' }
    ];
    
}]);


