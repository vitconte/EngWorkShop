angular.module('engWs')

    .controller('creaContattoController', ['$scope', '$location', 'Contatto', 'tipiContatto',
        function($scope, $location, Contatto, tipiContatto){

        // associo i dati dell'array tipoContatto passato con la resolve
        // alla variabile del modello tipoContatto
        $scope.tipiContatto = tipiContatto;

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