/**
 * Created by vconte02 on 29/05/2015.
 */
angular.module('engWs')

    .controller('creaContattoController', ['$scope', '$location', 'Contatto', function($scope, $location, Contatto){

        // nascondo i msg
        $scope.showSuccess = false;
        $scope.showDanger = false;

        // callback for ng-click 'createContatto':
        $scope.createContatto = function () {
            Contatto.create($scope.contatto)
                .$promise
                .then(function(response) {
                    // success
                    console.log('Successo', response);
                    $scope.showSuccess = true;
                }, function(response){
                    //error
                    console.log('Errore', response);
                    $scope.showDanger = true;
                });
        };

        // callback for ng-click 'cancel':
        $scope.cancel = function () {
           $scope.contatto = {};
        };
    }]);