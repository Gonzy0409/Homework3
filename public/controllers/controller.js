var myApp = angular.module('myApp', []); 

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    var refresh = function(){
	    $http.get('/Homework3').then(function(response){
	    	$scope.resume = response.data;
	    });
	};

	refresh();
}]);