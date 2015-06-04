/**
 * Created by Alessandro on 30/05/2015.
 */
angular
    .module('engWs')
    .controller('sicurezzaController',['$scope', '$sce', function($scope, $sce){

        $scope.trustAsHtml = $sce.trustAsHtml;

        $scope.htmlBody = '<h1 style="color:blue" onclick="alert(\'ciao\');">test</h1>';

        $scope.$watch('htmlBody', function(v) {
            $scope.trustHtml = $sce.trustAsHtml($scope.htmlBody);
        });

        $scope.linkInclude = "http://localhost:58817/api/Template";

    }]);