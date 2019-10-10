var app = angular.module('crudApp',['ui.router','ngStorage']);

app.constant('urls', {
    BASE: 'http://localhost:8080/SpringBootCRUDApp',
    USER_SERVICE_API : 'http://localhost:8080/SpringBootCRUDApp/api/'

});

app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'partials/list',
                controller:'UserController',
                controllerAs:'ctrl',
                resolve: {
                    users: function ($q, UserService) {
                        console.log('Load all users');
                        var deferred = $q.defer();
                        UserService.loadAllUsers().then(deferred.resolve, deferred.resolve);
                        return deferred.promise;
                    }
                }
            })
             .state('fclassstructure', {
                url: '/fclassstructure',
                templateUrl: 'partials/fclassstructure',
                controller:'UserController',
                controllerAs:'ctrl',

            })
            .state('fcomponent', {
                            url: '/fcomponent',
                            templateUrl: 'partials/fcomponent',
                            controller:'UserController',
                            controllerAs:'ctrl',

                        })

             .state('fcodependencies', {
                              url: '/fcomponent/fcodependencies',
                              templateUrl: 'partials/fcodependencies',
                              controller:'UserController',
                              controllerAs:'ctrl',

                         })
              .state('fcodescription', {
                              url: '/fcomponent/fcodescription',
                              templateUrl: 'partials/fcodescription',
                              controller:'UserController',
                              controllerAs:'ctrl',

                         })
              .state('preferiti', {
                              url: '/preferiti',
                              templateUrl: 'partials/preferiti',
                              controller:'UserController',
                              controllerAs:'ctrl',

                         })
              .state('ffamilystructure', {
                              url: '/ffamilystructure/fclassstructure',
                              templateUrl: 'partials/ffamilystructure',
                              controller:'UserController',
                              controllerAs:'ctrl',

                         });

        $urlRouterProvider.otherwise('/');
    }]);

