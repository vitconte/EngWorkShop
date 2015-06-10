/**
 * Created by arelati on 01/06/2015.
 */
angular
    .module('engWs')
    .factory('AuthInterceptor', ['$q', '$location', 'localStorageService', function($q, $location, ls) {
        return {
            'request': function (request) {
                request.headers = request.headers || {};

                var token = ls.get('token');
                request.headers.Authorization = token;
                console.log(typeof request.headers.Authorization)
                return request;
            },
            'responseError': function(response) {
                if(response.status === 401 || response.status === 403) {
                    $location.path('/login');
                }
                return $q.reject(response);
            }
        };
    }])
    .factory('AuthService', ['$http', 'localStorageService', function($http, ls) {
        return {
            login: function(username, password, callback) {
                //http://localhost:58817/api/Authentication
                $http.post('pub/Authentication', {
                    username: username,
                    password: password
                })
                .success(function(data, status, header, config){
                    ls.set('token', data.token);
                    callback();
                })
                .error(function(data, status, header, config){
                    ls.remove('token');
                    callback("Login failed");
                })
            },
            logout: function(callback) {
                ls.remove('token');
                callback();
            },
            status: function() {
                if(ls.get('token'))
                    return true;
                return false;
            }
        };
    }]);