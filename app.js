/**
 * Created by vconte02 on 28/05/2015.
 */
var app = angular.module('engWs', ['ngRoute', 'contattoModel', 'LocalStorageModule', 'tmh.dynamicLocale', 'pascalprecht.translate']);

app.config(['$routeProvider', '$httpProvider', 'localStorageServiceProvider', 'tmhDynamicLocaleProvider', '$sceDelegateProvider', '$translateProvider',
    function($routeProvider, $httpProvider, localStorageServiceProvider, tmhDynamicLocaleProvider, $sceDelegateProvider, translateProvider){

    localStorageServiceProvider
        .setPrefix('engWs')
        .setStorageType('sessionStorage')
        .setNotify(true, true);

    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    tmhDynamicLocaleProvider.localeLocationPattern('vendor/angular/i18n/angular-locale_{{locale}}.js');

    $httpProvider.interceptors.push("AuthInterceptor");

    $sceDelegateProvider.resourceUrlWhitelist(['self', 'http://localhost:58817/**']);

    translateProvider.useSanitizeValueStrategy('escaped');

    translateProvider.translations('en', {
        HEADLINE: 'Hello there, This is my awesome app!',
        INTRO_TEXT: 'And it has i18n support!'
    }).translations('it', {
        HEADLINE: 'Ciao, questa e la mia app!',
        INTRO_TEXT: 'Ha il supporto a i18n!'
    });

    translateProvider.useStaticFilesLoader({
        prefix: 'www/languages/',
        suffix: '.json'
    })

    translateProvider.preferredLanguage('en');
    /********************
    * Regole di routing *
    *********************/
    $routeProvider
        .when('/', { // route
            templateUrl: 'home/home.html', // template
            controller: 'homeController' // controller
        })
        .when('/rubrica', {
            templateUrl: 'rubrica/rubrica.html',
            controller: 'rubricaController'
        })
       .when('/rubrica/contatto-create', {
            templateUrl : 'rubrica/contatto/creaContatto.html',
            controller : 'creaContattoController'
        })

        .when('/rubrica/contatto-edit/:id', {
            templateUrl : 'rubrica/contatto/dettaglioContatto.html',
            controller : 'dettaglioContattoController'
        })
        .when('/sicurezza',{
            templateUrl : 'sicurezza/sicurezza.html',
            controller : 'sicurezzaController'
        })
        .when('/localization',{
            templateUrl : 'localization/localization.html',
            controller : 'localizationController'
        })
        .when('/auth', {
            templateUrl : 'auth/auth.html',
            controller : 'authController'
        })
        .otherwise({redirectTo: '/'});
}]);