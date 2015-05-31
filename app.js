/**
 * Created by vconte02 on 28/05/2015.
 */
var app = angular.module('engWs', ['ngRoute', 'contattoModel']);
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
        .when('/contatto-create', {
            templateUrl : 'rubrica/contatto/creaContatto.html',
            controller : 'creaContattoController'
        })
        .when('/contatto-edit/:id', {
                templateUrl : 'rubrica/contatto/dettaglioContatto.html',
                controller : 'dettaglioContattoController'
            })
        .otherwise({redirectTo: '/'});
}]);