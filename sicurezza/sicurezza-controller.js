/**
 * Created by Alessandro on 30/05/2015.
 */
angular
    .module('engWs')
    .controller('sicurezzaController',['$scope', 'tmhDynamicLocale', function($scope, tmhDynamicLocale){
        $scope.test = "pippo";

        $scope.Oggi  = new Date();
        $scope.Moneta = 123.45;

        $scope.switchLocale = function(lan){
            tmhDynamicLocale.set(lan);
        };

    }]);