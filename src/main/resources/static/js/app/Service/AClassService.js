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

                //AComponent
                setAComponent: setAComponent,


             }
             return factory;

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


            function setAClass (id) {
                console.log('Fetching AClass with id :'+id);
                var deferred = $q.defer();
                $http.get(urls.USER_SERVICE_API + 'aclass/' + id)
                .then(
                    function (response) {
                        console.log('Fetched successfully User with id :'+id);
                        $localStorage.acintroductions = response.data;
                        deferred.resolve(response.data);
                    },
                    function (errResponse) {
                        console.error('Error while loading AClass with id :'+id);
                        deferred.reject(errResponse);
                    }
                );
                return deferred.promise;
            }

}]);