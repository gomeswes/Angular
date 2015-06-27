var singlePageWebApp = angular.module("singlePageWebApp", ['ngRoute']);

singlePageWebApp.config(function routeCfg($routeProvider){
    $routeProvider.
        when('/', {
            templateUrl: 'pages/twitter.htm',
            controller: 'twitterController'
        })
        .when('/Loop', {
            templateUrl: 'pages/loop.htm',
            controller: 'loopController'
        })
        .when('/HelloWorld', {
            templateUrl: 'pages/helloWorld.htm',
            controller: 'helloWorldController'
        });
});

singlePageWebApp.controller('twitterController', ['$scope', '$filter', function twitterController($scope, $filter){
    $scope.title= "Twitter handle";
    if (!$scope.twitter)
        $scope.twitter = '';
    $scope.twitterToLower = function twitterToLower(){
        return $filter('lowercase')($scope.twitter);
    };
}]);

singlePageWebApp.controller('loopController', 
    ['$scope',
     function loopController($scope){
        $scope.title = "Loop";
        $scope.rules = [
            {name: "Rule 2"}, 
            {name: "Rule 1"},
            {name: "Rule 3"}
         ];
         
         
         $scope.newRule = '';
         $scope.createRule = function addRule(){
            $scope.rules.push({ name: $scope.newRule });
         };
    }
]);

singlePageWebApp.controller('helloWorldController', ['$scope', function helloWorldController($scope){
    $scope.title = "Hello World";
}]);