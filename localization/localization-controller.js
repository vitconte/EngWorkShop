/**
 * Created by arelati on 03/06/2015.
 */
angular
    .module('engWs')
    .controller('localizationController', ['$scope', 'tmhDynamicLocale', '$translate', function($scope, tmhDynamicLocale, $translate){

        $scope.currentLang = 'en';
        tmhDynamicLocale.set('en');

        $scope.dataOdierna  = new Date();
        $scope.moneta = 123.45;
        $scope.numero = 1234.56789;

        $scope.switchLang = function(lan){
            $scope.currentLang = lan;
            tmhDynamicLocale.set(lan);
            $translate.use(lan);

            if(lan == 'en')
                $scope.customLanguage = repoEng;
            else
                $scope.customLanguage = repoIta;
        };

        var repoIta = {
            titolo : 'Titolo di prova'
        };

        var repoEng = {
            titolo : 'This is the Title'
        };

        $scope.customLanguage = repoIta;

    }]);