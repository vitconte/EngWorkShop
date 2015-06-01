/**
 * Created by arelati on 01/06/2015.
 */
angular
    .module('engWs')
    .controller('authController', ['$scope', 'AuthService', '$http', 'localStorageService', function($scope, auth, $http, localStorageService){

        $scope.statusLogin = 'Non Connesso';
        $scope.errorMessage = '';

        if(localStorageService.isSupported) {
            alert('OK');
        }

        localStorageService.set('ciao', 'pippo');

        $scope.login = function(){

            auth.login($scope.username, $scope.password, function(err){

                console.log('arriva');

                if(err) {
                    $scope.errorMessage = err;
                    return;
                }

                $scope.statusLogin = 'Connesso';

            });
        }

        $scope.logout = function() {

            auth.logout(function(){

                $scope.statusLogin = 'Disconnesso';

            });

        }

    }]);