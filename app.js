/**
 * Created by vconte02 on 28/05/2015.
 */
var app = angular.module('engWs', ['ngRoute', 'contattoModel', 'tmh.dynamicLocale']);

app.config(['$routeProvider', 'tmhDynamicLocaleProvider', function($routeProvider, tmhDynamicLocaleProvider){

    tmhDynamicLocaleProvider.localeLocationPattern('vendor/angular/i18n/angular-locale_{{locale}}.js');

    $routeProvider
        .when('/', {
            templateUrl: 'home/home.html',
            controller: 'homeController'
        })
        .when('/rubrica', {
            templateUrl: 'rubrica/rubrica.html',
            controller: 'rubricaController'
        })
       .when('/contatto-create', {
            templateUrl : 'rubrica/contatto/creaContatto.html',
            controller : 'creaContattoController'
        })

        .when('/contatto-edit/:id', {
            templateUrl : 'rubrica/contatto/dettaglioContatto.html',
            controller : 'dettaglioContattoController'
        })
        .when('/sicurezza',{
            templateUrl : 'sicurezza/sicurezza.html',
            controller : 'sicurezzaController'
        })
        .otherwise({redirectTo: '/'});
}]);