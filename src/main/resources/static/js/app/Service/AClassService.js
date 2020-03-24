
'use strict';

angular.module('crudApp').factory('AClassService',
    ['$localStorage', '$http', '$q', 'urls',
        function($localStorage, $http, $q, urls) {

            var factory = {
                //AClass function
                loadAllAClasses: loadAllAClasses,
                getAllAClasses: getAllAClasses,
                getAClass: getAClass,
                setAClass: setAClass,
                getIdaclass: getIdaclass,



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


                // AfApplicationNotes
                setAfApplicationNotes: setAfApplicationNotes,
                getAfApplicationNotes: getAfApplicationNotes,

                //AComponent
                setAComponent: setAComponent,
                getAComponent: getAComponent,

            }
            return factory;

            // funzioni aclass
            function loadAllAClasses() {
                console.log('Fetching all AClasses');
                var deferred = $q.defer();
                $http.get(urls.USER_SERVICE_API + 'aclass/')
                    .then(
                        function(response) {
                            console.log('Fetched successfully all AClasses');
                            $localStorage.aclasses = response.data;
                            deferred.resolve(response);
                        },
                        function(errResponse) {
                            console.error('Error while loading AClasses');
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function getAllAClasses() {
                return $localStorage.aclasses;
            }

            function getAClass(id) {
                console.log('Fetching AClass with id :' + id);
                var deferred = $q.defer();
                $http.get(urls.USER_SERVICE_API + id)
                    .then(
                        function(response) {
                            console.log('Fetched successfully AClass with id :' + id);
                            deferred.resolve(response.data);
                        },
                        function(errResponse) {
                            console.error('Error while loading AClass with id :' + id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function setAClass(id) {
                console.log('Fetching AClass with id :' + id);
                var deferred = $q.defer();
                $http.get(urls.USER_SERVICE_API + 'aclass/' + id)
                    .then(
                        function(response) {
                            console.log('Fetched successfully AClass with id :' + id);
                            $localStorage.aclasses = response.data;
                            deferred.resolve(response.data);
                        },
                        function(errResponse) {
                            console.error('Error while loading AClass with id :' + id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function getIdaclass() {
                return $localStorage.aclasses.id;
            }







            //ACintroduction function
            function getAcIntroduction() {
                return $localStorage.acintroductions;
            }

            function setAcIntroduction(id) {
                console.log('Fetching AcIntroduction from AClass with id :' + id);
                var deferred = $q.defer();
                $http.get(urls.USER_SERVICE_API + 'acintroduction/' + id)
                    .then(
                        function(response) {
                            console.log('Fetched successfully AcIntroduction from AClass with id :' + id);
                            $localStorage.acintroductions = response.data;
                            deferred.resolve(response.data);
                        },
                        function(errResponse) {
                            console.error('Error while loading user with id :' + id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }


            // AFamily
            function getAFamily() {
                return $localStorage.afamily;
            }

            function setAFamily(id) {
                console.log('Fetching AFamily from AClass with id :' + id);
                var deferred = $q.defer();
                $http.get(urls.USER_SERVICE_API + 'afamily/' + id)
                    .then(
                        function(response) {
                            console.log('Fetched successfully AFamily from AClass with id :' + id);
                            $localStorage.afamily = response.data;
                            deferred.resolve(response.data);
                        },
                        function(errResponse) {
                            console.error('Error while loading AFamily from AClass with id :' + id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function getIdAFamily() {   // l'id della family lo devo prendere da qua perchè questo afobjective gia sta dentro, m so capit sul ij lass sta
                return $localStorage.afobjectives[0].idf;
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


            // AfApplicationNotes
            function setAfApplicationNotes(id) {
                console.log('Fetching AfApplicationNotes from AFamily with id :' + id);
                var deferred = $q.defer();
                $http.get(urls.USER_SERVICE_API + 'afapplicationnotes/' + id)
                    .then(
                        function(response) {
                            console.log('Fetched successfully AfApplicationNotes from AFamily with id :' + id);
                            $localStorage.afapplicationnotes = response.data;
                            deferred.resolve(response.data);
                        },
                        function(errResponse) {
                            console.error('Error while loading AfApplicationNotes from AFamily with id :' + id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function getAfApplicationNotes() {
                return $localStorage.afapplicationnotes;
            }

            //Acomponent function
            function setAComponent(id) {
                console.log('Fetching AComponent from AFamily with id :' + id);
                var deferred = $q.defer();
                $http.get(urls.USER_SERVICE_API + 'acomponent/' + id)
                .then(
                    function(response) {
                        console.log('Fetched successfully AComponent from AFamily with id :' + id);
                        $localStorage.acomponent = response.data;
                        deferred.resolve(response.data);
                    },
                    function(errResponse) {
                        console.error('Error while loading AComponent from AFamily with id :' + id);
                        deferred.reject(errResponse);
                    }
                );
            }
            function getAComponent() {
                return $localStorage.acomponent;
            }
        }
    ]);