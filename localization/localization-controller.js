/**
 * Created by arelati on 03/06/2015.
 */
angular
    .module('engWs')
    .controller('localizationController', ['$scope', 'tmhDynamicLocale', function($scope, tmhDynamicLocale){

        $scope.currentLang = 'en';
        tmhDynamicLocale.set('en');

        $scope.dataOdierna  = new Date();
        $scope.moneta = 123.45;

        $scope.switchLang = function(lan){
            $scope.currentLang = lan;
            tmhDynamicLocale.set(lan);
        };

    }]);