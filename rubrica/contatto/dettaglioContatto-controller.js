angular.module('engWs')
    .controller('dettaglioContattoController', ['$scope', 'Contatto', '$location', '$routeParams',
        function($scope, Contatto, $location, $routeParams){

        //Verifica se il form e' cambiato
        $scope.isUnchanged = function(contatto) {
            return angular.equals(contatto, $scope.contatto);
        };

        // callback for ng-click 'update':
        $scope.updateContatto = function () {
            Contatto.update({id: $routeParams.id}, $scope.contatto,
                function() {
                   // success
                   // ToDo: Gestire i msg di success e error
                },
                function(){
                    // error
                }
            );
        };

        // callback for ng-click 'cancel':
        $scope.cancel = function () {
            $location.path('/contatto-list');
        };

        Contatto.show({id: $routeParams.id}, function(contatto) {
            $scope.contatto = new Object();
            $scope.contatto.nome = contatto.nome;
            $scope.contatto.cognome = contatto.cognome;
            $scope.contatto.telefono = contatto.telefono;
        });
    }]);