/**
 * Created by vconte02 on 29/05/2015.
 */
angular.module('engWs')

    .controller('creaContattoController', ['$scope', '$location', 'Contatto', function($scope, $location, Contatto){

        // callback for ng-click 'createContatto':
        $scope.createContatto = function () {
            Contatto.create($scope.contatto)
                .$promise
                .then(function(response) {
                    // success

                    // ToDo: Gestire i msg di success e error
                })
                .then(function(response){
                    //error
                });
        };

        // callback for ng-click 'cancel':
        $scope.cancel = function () {
           $scope.contatto = {};
        };
    }]);