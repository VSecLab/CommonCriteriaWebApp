'use strict';

angular.module('crudApp').factory('AClassService',
    ['$localStorage', '$http', '$q', 'urls',
        function ($localStorage, $http, $q, urls) {

             var factory = {
                loadAllAClasses: loadAllAClasses,
                getAllAClasses: getAllAClasses,
                getAClass: getAClass,


                setacomponent: setacomponent,
                getListAcomponent: getListAcomponent,

             }
             return factory;


             function loadAllAClasses() {
                console.log('Fetching all AClasses');
                var deferred = $q.defer();
                $http.get(urls.USER_SERVICE_API)
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
                console.log('Fetching AClass with id: ' +id);
                var deferred = $q.defer();
                $http.get(urls.USER_SERVICE_API + id)
                    .then(
                        function(response) {
                            console.log('Fetched successfully AClass with id :' +id);
                            deferred.resolve(response.data);
                        },
                        function(errResponse) {
                            console.error('Error while loading AClass with id: ' +id);
                            deferred.reject(errResponse);
                        }
                    );
             return deferred.promise;
             }

             function setacomponent(id){
                                     console.log('Fetching acomponent with id :'+ id_acomponent);
                                     var deferred = $q.defer();
                                     $http.get(urls.USER_SERVICE_API + 'acomponent/' + id)
                                     .then(
                                     function (response) {
                                         console.log('Fetched successfully acomponent with id :'+ id_acomponent);
                                         $localStorage.acomponent = response.data;
                                         deferred.resolve(response.data);
                                         },
                                     function (errResponse) {
                                         console.error('Error while loading acomponent with id :'+ id);
                                         deferred.reject(errResponse);
                                         }
                                    );
                                     return deferred.promise;
                               }
                function getListAcomponent(){
                         return $localStorage.acomponent;
                     }

    }

]);