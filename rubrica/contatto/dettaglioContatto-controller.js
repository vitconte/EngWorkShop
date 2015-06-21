angular.module('engWs')
    .controller('dettaglioContattoController', ['$scope', 'Contatto', '$location', '$routeParams', 'tipiContatto',
        function($scope, Contatto, $location, $routeParams, tipiContatto){

            // associo i dati dell'array tipoContatto passato con la resolve
            // alla variabile del modello tipoContatto
            $scope.tipiContatto = tipiContatto;

            // nascondo i msg
            $scope.showSuccess = false;
            $scope.showDanger = false;

            // Verifica se il form e' cambiato
            $scope.isUnchanged = function(contatto) {
                return angular.equals(contatto, $scope.contatto);
            };

            // Callback for ng-click 'update':
            $scope.updateContatto = function () {
                // Chiamata alla action update della resource
                Contatto.update({id: $routeParams.id}, $scope.contatto,
                    function() {
                       // success
                       $scope.showSuccess = true;
                    },
                    function(){
                        // error
                        $scope.showDanger = true;
                    }
                );
            };

            // Callback for ng-click 'cancel':
            $scope.cancel = function () {
                $location.path('/rubrica');
            };

            // Carico dati contatto chiamando la action show della resource
            Contatto.show({id: $routeParams.id}, function(contatto) {
                $scope.contatto = new Object();
                $scope.contatto.nome = contatto.nome;
                $scope.contatto.cognome = contatto.cognome;
                $scope.contatto.telefono = contatto.telefono;
                $scope.contatto.tipo = contatto.tipo;
                $scope.contatto.completamento = contatto.completamento;
            });
    }]);