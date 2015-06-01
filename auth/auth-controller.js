/**
 * Created by arelati on 01/06/2015.
 */
angular
    .module('engWs')
    .controller('authController', ['$scope', 'AuthService', '$http', 'localStorageService', function($scope, auth, $http, localStorageService){

        $scope.statusLogin = 'Non Connesso';
        $scope.errorMessage = '';


        $scope.login = function(){

            auth.login($scope.username, $scope.password, function(err){

                console.log('arriva');

                if(err) {
                    $scope.errorMessage = err;
                    return;
                }

                $scope.statusLogin = 'Connesso';

            });
        };

        $scope.logout = function() {

            auth.logout(function(){

                $scope.statusLogin = 'Disconnesso';

            });

        };

        $scope.testLogin = function(){
            $http
                .get('http://localhost:58817/api/Authentication', { params : { message : 'messaggio'}})
                .success(function (data) {
                    console.log(data);
                })
        };


    }]);