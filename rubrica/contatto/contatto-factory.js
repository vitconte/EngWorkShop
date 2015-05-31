/**
 * Astrazione servizi REST per il model Contatto
 */

var contattoModel = angular.module('contattoModel', ['ngResource']);


contattoModel.factory('Contatto', ['$resource',
    function($resource){
        return $resource('https://api.mongolab.com/api/1/databases/angworkshop/collections/contatto/:id', {}, {
            show: { method: 'GET', params: {apiKey:'WLKPfaC3ztzHpxYtyTD85D7-7iXaO4dj', id: '@id'} },
            update: { method: 'PUT', params: {apiKey:'WLKPfaC3ztzHpxYtyTD85D7-7iXaO4dj', id: '@id'} },
            delete: { method: 'DELETE', params: {apiKey:'WLKPfaC3ztzHpxYtyTD85D7-7iXaO4dj', id: '@id'} },
            create: { method: 'POST', params: {apiKey:'WLKPfaC3ztzHpxYtyTD85D7-7iXaO4dj'} }
        });
    }]);