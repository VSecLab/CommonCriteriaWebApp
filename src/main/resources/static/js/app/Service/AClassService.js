'use strict';

angular.module('crudApp').factory('AClassService',
    ['$localStorage', '$http', '$q', 'urls',
        function ($localStorage, $http, $q, urls) {

             var factory = {
                //AClass function
                loadAllAClasses: loadAllAClasses,
                getAllAClasses: getAllAClasses,
                getAClass: getAClass,
                setAClass: setAClass,
                getIdaclass: getIdaclass,

                //AComponent
                setAComponent: setAComponent,

                // AcIntroduction
                getAcIntroduction: getAcIntroduction,
                setAcIntroduction: setAcIntroduction,

                // AFamily
                setAFamily: setAFamily,
                getAFamily: getAFamily,
                getIdAFamily: getIdAFamily,

                // AfObjectives
                setAfObjectives: setAfObjectives,
                getAfObjectives: getAfObjectives,

                // AfLevellingCriteria
                setAfLevellingCriteria: setAfLevellingCriteria,
                getAfLevellingCriteria: getAfLevellingCriteria,

             }
             return factory;

            // funzioni aclass
            function loadAllAClasses() {
                console.log('Fetching all AClasses');
                var deferred = $q.defer();
                $http.get(urls.USER_SERVICE_API + 'aclass/')
                .then(
                    function (response) {
                        console.log('Fetched successfully all AClasses');
                        $localStorage.aclasses = response.data;
                        deferred.resolve(response);
                    },
                    function (errResponse) {
                        console.error('Error while loading AClasses');
                        deferred.reject(errResponse);
                    }
                );
                return deferred.promise;
            }
            function getAllAClasses(){
                return $localStorage.aclasses;
            }
            function getAClass(id) {
                console.log('Fetching AClass with id :'+id);
                var deferred = $q.defer();
                $http.get(urls.USER_SERVICE_API + id)
                .then(
                    function (response) {
                        console.log('Fetched successfully AClass with id :'+id);
                        deferred.resolve(response.data);
                    },
                    function (errResponse) {
                        console.error('Error while loading AClass with id :'+id);
                        deferred.reject(errResponse);
                    }
                );
                return deferred.promise;
            }
            function setAClass (id) {
                console.log('Fetching AClass with id :'+id);
                var deferred = $q.defer();
                $http.get(urls.USER_SERVICE_API + 'aclass/' + id)
                .then(
                    function (response) {
                        console.log('Fetched successfully AClass with id :'+id);
                        $localStorage.aclasses = response.data;
                        deferred.resolve(response.data);
                    },
                    function (errResponse) {
                        console.error('Error while loading AClass with id :'+id);
                        deferred.reject(errResponse);
                    }
                );
                 return deferred.promise;
            }
            function getIdaclass() {
                return $localStorage.aclasses.id;
            }


            //Acomponent function
            function setAComponent(id){
                console.log('Fetching AComponent with id :'+ id);
                var deferred = $q.defer();
                $http.get(urls.USER_SERVICE_API + 'AComponent/' + id)
                .then(
                    function (response) {
                        console.log('Fetched successfully AComponent with id :'+ id);
                        $localStorage.acomponent = response.data;   //acomponent piccolo per è il nome della tabella
                        deferred.resolve(response.data);
                    },
                    function (errResponse) {
                        console.error('Error while loading AComponent with id :'+ id);
                        deferred.reject(errResponse);
                    }
                );
            }




            //ACintroduction function
            function getAcIntroduction() {
                return $localStorage.acintroductions;
            }
            function setAcIntroduction (id) {
                console.log('Fetching AcIntroduction from AClass with id :'+id);
                var deferred = $q.defer();
                $http.get(urls.USER_SERVICE_API + 'acintroduction/' + id)
                .then(
                    function (response) {
                        console.log('Fetched successfully AcIntroduction from AClass with id :'+id);
                        $localStorage.acintroductions = response.data;
                        deferred.resolve(response.data);
                    },
                    function (errResponse) {
                        console.error('Error while loading user with id :'+id);
                        deferred.reject(errResponse);
                    }
                );
                return deferred.promise;
            }


            // AFamily
            function getAFamily() {
                return $localStorage.afamily;
            }
            function setAFamily(id){
                console.log('Fetching AFamily from AClass with id :'+id);
                var deferred = $q.defer();
                $http.get(urls.USER_SERVICE_API + 'afamily/' + id)
                .then(
                    function (response) {
                        console.log('Fetched successfully AFamily from AClass with id :'+id);
                        $localStorage.afamily = response.data;
                        deferred.resolve(response.data);
                    },
                    function (errResponse) {
                        console.error('Error while loading AFamily from AClass with id :'+id);
                        deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
            function getIdAFamily() {
                return $localStorage.afamily[0].id_afamily;
            }


            // AfObjectives
            function setAfObjectives(id) {
                console.log('Fetching AfObjectives from AFamily with id :' + id);
                var deferred = $q.defer();
                $http.get(urls.USER_SERVICE_API + 'afobjectives/' + id)
                    .then(
                        function(response) {
                            console.log('Fetched successfully AfObjectives from AFamily with id :' + id);
                            $localStorage.afobjectives = response.data;
                            deferred.resolve(response.data);
                        },
                        function(errResponse) {
                            console.error('Error while loading AfObjectives from AFamily with id :' + id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
            function getAfObjectives() {
                return $localStorage.afobjectives;
            }


            // AfLevellingCriteria
            function setAfLevellingCriteria(id) {
                console.log('Fetching AfLevellingCriteria from AFamily with id :' + id);
                var deferred = $q.defer();
                $http.get(urls.USER_SERVICE_API + 'aflevellingcriteria/' + id)
                .then(
                    function(response) {
                        console.log('Fetched successfully AfLevellingCriteria from AFamily with id :' + id);
                        $localStorage.aflevellingcriteria = response.data;
                        deferred.resolve(response.data);
                    },
                    function(errResponse) {
                        console.error('Error while loading AfLevellingCriteria from AFamily with id :' + id);
                        deferred.reject(errResponse);
                    }
                );
                return deferred.promise;
            }
            function getAfLevellingCriteria() {
                return $localStorage.aflevellingcriteria;
            }
    }
]);