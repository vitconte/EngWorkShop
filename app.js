/**
 * Created by vconte02 on 28/05/2015.
 */
var app = angular.module('engWs', ['ngRoute', 'ngSanitize', 'contattoModel', 'LocalStorageModule', 'tmh.dynamicLocale', 'pascalprecht.translate', 'ngAria']);

app.config(['$routeProvider', '$httpProvider', 'localStorageServiceProvider', 'tmhDynamicLocaleProvider', '$sceDelegateProvider', '$translateProvider', '$locationProvider',
    function($routeProvider, $httpProvider, localStorageServiceProvider, tmhDynamicLocaleProvider, $sceDelegateProvider, translateProvider, $locationProvider){


    localStorageServiceProvider
        .setPrefix('engWs');
        //.setStorageType('sessionStorage')
        //.setNotify(true, true);

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
        prefix: './language/',
        suffix: '.json'
    });

    translateProvider.preferredLanguage('en');

    /********************
    * Regole di routing *
    *********************/
    $routeProvider
        .when('/home', { // route
            templateUrl: 'home/home.html', // template
            controller: 'homeController', // controller
            access: { requiredLogin: false }
        })
        .when('/rubrica', {
            templateUrl: 'rubrica/rubrica.html',
            controller: 'rubricaController',
            access: { requiredLogin: false }
        })
       .when('/rubrica/contatto-create', {
            templateUrl : 'rubrica/contatto/creaContatto.html',
            controller : 'creaContattoController',
            resolve: {tipiContatto: function(){ return ['casa', 'ufficio', 'personale']}},
            access: { requiredLogin: false }
        })
        .when('/rubrica/contatto-edit/:id', {
            templateUrl : 'rubrica/contatto/dettaglioContatto.html',
            controller : 'dettaglioContattoController',
            resolve: {tipiContatto: function(){ return ['casa', 'ufficio', 'personale']}},
            access: { requiredLogin: false }
        })
        .when('/sicurezza',{
            templateUrl : 'sicurezza/sicurezza.html',
            controller : 'sicurezzaController',
            access: { requiredLogin: false }
        })
        .when('/localization',{
            templateUrl : 'localization/localization.html',
            controller : 'localizationController',
            access: { requiredLogin: true }
        })
        .when('/auth', {
            templateUrl : 'auth/auth.html',
            controller : 'authController',
            access: { requiredLogin: false }
        })
        .otherwise({redirectTo: '/home'});

        /* For HTML5 ROUTING */
        /*
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        $locationProvider.hashPrefix('!');
        */
}]);

app.run(function($rootScope, AuthService) {
    $rootScope.$on("$routeChangeStart", function(event, nextRoute, currentRoute) {

            if (nextRoute.access.requiredLogin && !AuthService.status()) {
                event.preventDefault();
                window.location.href = "#/auth";
                return;
            };


    });
});

