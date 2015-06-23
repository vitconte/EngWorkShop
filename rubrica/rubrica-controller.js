/**
 * Created by vconte02 on 29/05/2015.
 */
angular.module('engWs')
    .controller('rubricaController', ['$scope', '$http', '$location', function($scope, $http, $location){

        // codice identificativo da usare per accedere alle webapi esposte dal servizio mongoLab per il db dell'esempio
        var API_KEY = 'WLKPfaC3ztzHpxYtyTD85D7-7iXaO4dj';

        $scope.showDanger = false;

        /***********************
         *  FUNZIONI BACK END  *
         ***********************/

        // callback for ng-click 'editContatto':
        $scope.editContatto = function (idContatto) {
            $location.path('/rubrica/contatto-edit/' + idContatto);
        };

        // callback for ng-click 'deleteContatto':
        $scope.deleteContatto = function (contatto) {
            $scope.showDanger = false;
            $http.delete('https://api.mongolab.com/api/1/databases/angworkshop/collections/contatto/' + contatto._id.$oid + '?apiKey=' + API_KEY)
                .success(function(response){
                    // success
                    console.log('eliminazione avvenuta con successo');
                    $scope.rubrica.remove(contatto);
                })
                .error(function(response){
                    // error
                    console.log('eliminazione non andata a buon fine');
                    $scope.showDanger = true;
                });
        };

        // callback for ng-click 'createContatto':
        $scope.createContatto = function () {
            $location.path('/rubrica/contatto-create');
        };


        // Get di tutti i rubrica
        $scope.getRubrica = function () {
            return $http.get('https://api.mongolab.com/api/1/databases/angworkshop/collections/contatto?apiKey=' + API_KEY);
        };



        /**********
         *  MAIN  *
         **********/

        // Carico la Rubrica
        $scope.getRubrica()
            .then(function(response) {
                $scope.rubrica = response.data;
            });


        /*********************
         *  UTILITY INTERNE  *
         *********************/

        Array.prototype.remove = function (elem) {
            var index;
            for (var i in this) {
                if (this[i] == elem) index = i;
            }
            this.splice(index, 1);
        }
    }]);