
// create the module and name it crudApp
var app = angular.module('crudApp', ['ngRoute', 'ngStorage']);

app.constant('urls', {
    BASE: 'http://localhost:8080/SpringBootCRUDApp',
    USER_SERVICE_API: 'http://localhost:8080/SpringBootCRUDApp/api/'
});

// configure routes
app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/list.ftl',
            controller: 'AClassController',
            controllerAs: 'ctrl',
            resolve: {
                aClasses: function($q, AClassService) {
                    console.log('Load all AClasses');
                    var deferred = $q.defer();
                    AClassService.loadAllAClasses()
                        .then(deferred.resolve, deferred.resolve);
                    return deferred.promise;
                }
            }
        })


        // route for the Contact Us page
        .when('/prova', {
            templateUrl: '/partials/prova.ftl'
        })
        // route for the about page
        .when('/about', {
            templateUrl: '/partials/About.ftl'
        })
        // route for the edit page of SFR
        .when('/editSFR', {
            templateUrl: '/partials/editSFR.ftl',
            controller: 'UserController',
            controllerAs: 'ctrl'
        })
        // route for the edit page of SAR
        .when('/editSAR', {
            templateUrl: '/partials/editSAR.ftl',
            controller: 'AClassController',
            controllerAs: 'ctrl'
        })
        // route for the fcomponent page
        .when('/fcomponent', {
            templateUrl: 'partials/fcomponent',
            controller: 'UserController',
            controllerAs: 'ctrl',
        })
        // route for the acomponent page
        .when('/acomponent', {
            templateUrl: 'partials/acomponent',
            controller: 'AClassController',
            controllerAs: 'ctrl',
        })
        .when('/selectedelements', {
            templateUrl: 'partials/selectedelements',
            controller: 'UserController',
            controllerAs: 'ctrl',
        })
        .when('/show', {
            templateUrl: 'partials/show',
            controller: 'UserController',
            controllerAs: 'ctrl',
        })
        .when('/fcomponent/fcodescription', {
            templateUrl: 'partials/fcodescription',
            controller: 'UserController',
            controllerAs: 'ctrl',
        })

        .when('/fclassstructure', {
            templateUrl: 'partials/fclassstructure',
            controller: 'UserController',
            controllerAs: 'ctrl',
        })

        // route for aclassstructure page
        .when('/aclassstructure', {
            templateUrl: 'partials/aclassstructure',
            controller: 'AClassController',
            controllerAs: 'ctrl',
        })

        // route for afamilystructure page
        .when('/afamilystructure', {
            templateUrl: 'partials/afamilystructure',
            controller: 'AClassController',
            controllerAs: 'ctrl',
        })

        .when('/ffamilystructure', {
            templateUrl: 'partials/ffamilystructure',
            controller: 'UserController',
            controllerAs: 'ctrl',
        })

        .when('/afamilystructure/acomponentstructure', {
                    templateUrl: 'partials/AComponentStructure',
                    controller: 'UserController',
                    controllerAs: 'ctrl',
                })

        .otherwise({
            redirectTo: '/'
        });

});