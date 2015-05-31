/**
 * Created by vconte02 on 29/05/2015.
 */
angular.module('engWs')
    .controller('rubricaController', ['$scope', '$http', '$location', function($scope, $http, $location){

        var API_KEY = 'WLKPfaC3ztzHpxYtyTD85D7-7iXaO4dj';

        /***********************
         *  FUNZIONI BACK END  *
         ***********************/

        // callback for ng-click 'editContatto':
        $scope.editContatto = function (idContatto) {
            $location.path('/contatto-edit/' + idContatto);
        };

        // callback for ng-click 'deleteContatto':
        $scope.deleteContatto = function (idContatto) {
            return $http.get('https://api.mongolab.com/api/1/databases/angworkshop/collections/contatto/' + idContatto + '?apiKey=' + API_KEY);
        };

        // callback for ng-click 'createContatto':
        $scope.createContatto = function () {
            $location.path('/contatto-create');
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

    }]);