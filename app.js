/**
 * Created by vconte02 on 28/05/2015.
 */
var app = angular.module('engApp', ['ngRoute'])

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'home/home.html',
            controller: 'homeController'
        })
        .when('/rubrica', {
            templateUrl: 'rubrica/rubrica.html',
            controller: 'rubricaController'
        })
        .when('/rubrica/crea', {
            templateUrl: 'rubrica/contatto/creaContatto.html',
            controller: 'creaContattoController'
        })
        .when('/rubrica/contatto/:id', {
            templateUrl: 'rubrica/contatto/dettaglo.html',
            controller: 'dettaglioContattoController'
        })
        .otherwise({redirectTo: '/'});
}]);