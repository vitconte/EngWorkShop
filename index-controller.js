angular.module('engWs')
    .controller('indexController', ['$scope', '$location', function($scope, $location) {
        // definizione variabile globale per gestione active menu
        $scope.isActive = function(path) {
            if ($location.path().substr(0, path.length) == path) {
                return "active";
            } else {
                return "";
            }
    };
}]);