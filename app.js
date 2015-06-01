/**
 * Created by vconte02 on 28/05/2015.
 */
var app = angular.module('engWs', ['ngRoute', 'contattoModel', 'LocalStorageModule', 'tmh.dynamicLocale']);

app.config(['$routeProvider', '$httpProvider', 'localStorageServiceProvider', 'tmhDynamicLocaleProvider', '$sceDelegateProvider',
    function($routeProvider, $httpProvider, localStorageServiceProvider, tmhDynamicLocaleProvider, $sceDelegateProvider){

    localStorageServiceProvider
        .setPrefix('engWs')
        .setStorageType('sessionStorage')
        .setNotify(true, true);

    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    tmhDynamicLocaleProvider.localeLocationPattern('vendor/angular/i18n/angular-locale_{{locale}}.js');

    $httpProvider.interceptors.push("AuthInterceptor");

    $sceDelegateProvider.resourceUrlWhitelist(['self', 'http://localhost:58817/**']);

    // regole di routing
    $routeProvider
        .when('/', { // route
            templateUrl: 'home/home.html', // template
            controller: 'homeController' // controller
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
        .when('/auth', {
            templateUrl : 'auth/auth.html',
            controller : 'authController'
        })
        .otherwise({redirectTo: '/'});
}]);