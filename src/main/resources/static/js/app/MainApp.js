
// create the module and name it crudApp
var app = angular.module('crudApp', ['ngRoute', 'ngStorage']);

app.constant('urls', {
    BASE: 'http://localhost:8080/SpringBootCRUDApp',
    USER_SERVICE_API: 'http://localhost:8080/SpringBootCRUDApp/api/'
});

// configure routes
app.config(function($routeProvider) {
    $routeProvider

        // root
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
        // route for contactus
        .when('/prova', {
            templateUrl: '/partials/prova.ftl'
        })
        // route for about
        .when('/about', {
            templateUrl: '/partials/About.ftl'
        })

        // -----------------------------Routes for Security Assurance Requirements-----------------------
        // route for editSAR
        .when('/editSAR', {
            templateUrl: '/partials/editSAR.ftl',
            controller: 'AClassController',
            controllerAs: 'ctrl'
        })
        // route for aclassstructure
        .when('/aclassstructure', {
            templateUrl: 'partials/aclassstructure',
            controller: 'AClassController',
            controllerAs: 'ctrl',
        })
        // route for afamilystructure
        .when('/afamilystructure', {
            templateUrl: 'partials/afamilystructure',
            controller: 'AClassController',
            controllerAs: 'ctrl',
        })
        // route for acomponentstructure
        .when('/afamilystructure/acomponentstructure', {
            templateUrl: 'partials/AComponentStructure',
            controller: 'AClassController',
            controllerAs: 'ctrl',
        })
        // route for assurancerequirementsstructure
        .when('/assurancerequirementsstructure', {
            templateUrl: 'partials/AssuranceRequirementsStructure',
            controller: 'AClassController',
            controllerAs: 'ctrl',
        })
        // route for show  security assuracene requirements
        .when('/showSAR', {
            templateUrl: 'partials/showSAR',
            controller: 'AClassController',
            controllerAs: 'ctrl',
        })
        // route for selected element assurance requirements
        .when('/selectedelementassurancerequirements', {
            templateUrl: 'partials/selectedelementassurancerequirements',
            controller: 'AClassController',
            controllerAs: 'ctrl',
        })




        // -----------------------------Routes for Security Assurance Requirements-----------------------        // route for the Contact Us page

        .when('/editSFR', {
            templateUrl: '/partials/editSFR.ftl',
            controller: 'UserController',
            controllerAs: 'ctrl'
        })
        .when('/fcomponent', {
            templateUrl: 'partials/fcomponent',
            controller: 'UserController',
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
        .when('/ffamilystructure', {
            templateUrl: 'partials/ffamilystructure',
            controller: 'UserController',
            controllerAs: 'ctrl',
        })



        // redirect to the root for not found route
        .otherwise({
            redirectTo: '/'
        });

});