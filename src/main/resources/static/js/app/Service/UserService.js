'use strict';

angular.module('crudApp').factory('UserService',
    ['$localStorage', '$http', '$q', 'urls',
        function ($localStorage, $http, $q, urls) {

            var factory = {
                loadAllUsers: loadAllUsers,
                setUser: setUser,

                getAllUsers: getAllUsers,
                getFci: getFci,

                setFcInformativeNotes: setFcInformativeNotes,
                getListFcInformativeNotes: getListFcInformativeNotes,

                setFfamily: setFfamily,
                getListFfamily: getListFfamily,

                setFcomponent: setFcomponent,
                getListFcomponent: getListFcomponent,

                setFcodipendencies: setFcodipendencies,
                getListFcodipendencies: getListFcodipendencies,

                setFcoEvaluatorNotes:  setFcoEvaluatorNotes,
                getFcoEvaluatorNotes:  getFcoEvaluatorNotes,

                createUser: createUser,
                readListClass: readListClass,
                getListFclass: getListFclass,
                removeElementFclass: removeElementFclass,

               setFfBehaviour: setFfBehaviour,
               getFfBehaviour: getFfBehaviour,

               setFcoUserNotes: setFcoUserNotes,
               getFcoUserNotes: getFcoUserNotes,


            };

            return factory;

            function loadAllUsers() {
                console.log('Fetching all users');
                var deferred = $q.defer();
                $http.get(urls.USER_SERVICE_API+ 'user/')
                    .then(
                        function (response) {
                            console.log('Fetched successfully all users');
                            $localStorage.users = response.data;
                            deferred.resolve(response);
                        },
                        function (errResponse) {
                            console.error('Error while loading users');
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function getAllUsers(){
                return $localStorage.users;
            }

             function getFci(){
                return $localStorage.fcintroductions;
              }


             function getListFcInformativeNotes(){
                       return $localStorage.fcinformationsnotes;
             }

             function getListFfamily(){
                       return $localStorage.ffamily;
                    }

             function getListFcomponent(){
                         return $localStorage.fcomponent;
                     }
              function getListFco(){
                         return $localStorage.fcomponent;
                     }

             function getListFcodipendencies(){
                        return $localStorage.fcodipendencies;
                     }
             function getFcoEvaluatorNotes(){
                         return $localStorage.fcoevaluatornotes;
             }

             function getListFclass(){
                         return   $localStorage.listFclass;
             }

             function getFfBehaviour(){
                        return $localStorage.ffbehaviour;
             }

             function getFcoUserNotes(){
                         return $localStorage.fcousernotes;
                          }

            function setUser (id) {
                console.log('Fetching User with id :'+id);
                var deferred = $q.defer();
                $http.get(urls.USER_SERVICE_API + 'user/' + id)
                    .then(
                        function (response) {
                            console.log('Fetched successfully User with id :'+id);
                            $localStorage.fcintroductions = response.data;
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while loading user with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

         function setFcInformativeNotes(id){
               console.log('Fetching setFcInformativeNotes( with id :'+id);
               var deferred = $q.defer();
               $http.get(urls.USER_SERVICE_API + 'users/' + id)
               .then(
               function (response) {
                   console.log('Fetched successfully setFcInformativeNotes( with id :'+id);
                   $localStorage.fcinformationsnotes = response.data;
                   deferred.resolve(response.data);
                   },
               function (errResponse) {
                   console.error('Error while loading user with id :'+id);
                   deferred.reject(errResponse);
                   }
              );
               return deferred.promise;
         }

           function setFfamily(id){
                        console.log('Fetching flcass with id :'+id);
                        var deferred = $q.defer();
                        $http.get(urls.USER_SERVICE_API + 'family/' + id)
                        .then(
                        function (response) {
                            console.log('Fetched successfully Ffamily with id :'+id);

                            $localStorage.ffamily = response.data;
                            deferred.resolve(response.data);
                            },
                        function (errResponse) {
                            console.error('Error while loading Ffamily with id :'+id);
                            deferred.reject(errResponse);
                            }
                       );
                        return deferred.promise;
                  }

                function setFcomponent(Name){
                        console.log('Fetching fcomponent with id :'+ Name);
                        var deferred = $q.defer();
                        $http.get(urls.USER_SERVICE_API + 'fcomponent/' + Name)
                        .then(
                        function (response) {
                            console.log('Fetched successfully fcomponent with id :'+Name);
                            $localStorage.fcomponent = response.data;
                            deferred.resolve(response.data);
                            },
                        function (errResponse) {
                            console.error('Error while loading fcomponent with id :'+Name);

                            deferred.reject(errResponse);
                            }
                       );
                        return deferred.promise;
                  }

            function setFcodipendencies(id){
                  console.log('Fetching fcodipendencies with id :'+ id);
                  var deferred = $q.defer();
                  $http.get(urls.USER_SERVICE_API + 'fcodependencies/' + id)
                          .then(
                             function (response) {
                                  console.log('Fetched successfully Fcodipendencies with id :'+ id);
                                  $localStorage.fcodipendencies = response.data;

                                  deferred.resolve(response.data);
                                },
                             function (errResponse) {
                                console.error('Error while loading Fcodipendencies with id :'+ id );
                                deferred.reject(errResponse);
                              }
                      );
                      return deferred.promise;
             }

             function setFcoEvaluatorNotes(id){
                    console.log('Fetching fcoevaluatornotes with id :'+ id);
                    var deferred = $q.defer();
                    $http.get(urls.USER_SERVICE_API + 'fcoevaluatornotes/' + id)
                               .then(
                                  function (response) {
                                  console.log('Fetched successfully fcoevaluatornotes with id :'+ id);
                                  $localStorage.fcoevaluatornotes = response.data;
                                  deferred.resolve(response.data);
                                             },
                                  function (errResponse) {
                                  console.error('Error while loading fcoevaluatornotes with id :'+ id );

                                  deferred.reject(errResponse);
                                           }
                                   );
                        return deferred.promise;
                 }



              function setFcoUserNotes(id){
                    console.log('Fetching setFcoUserNotes with id :'+ id);
                    var deferred = $q.defer();
                    $http.get(urls.USER_SERVICE_API + 'fcousernotes/' + id)
                               .then(
                                  function (response) {
                                  console.log('Fetched successfully fcousernotes with id :'+ id);
                                  $localStorage.fcousernotes = response.data;
                                  deferred.resolve(response.data);
                                             },
                                  function (errResponse) {
                                  console.error('Error while loading fcousernotes with id :'+ id );
                                  deferred.reject(errResponse);
                                           }
                                   );
                        return deferred.promise;
                 }


          function createUser(user) {
                          console.log('Creating User');
                          var deferred = $q.defer();
                          $http.post(urls.USER_SERVICE_API + 'fclass/', user)
                              .then(
                                  function (response) {
                                      readListClass();
                                      deferred.resolve(response.data);

                                  },
                                  function (errResponse) {
                                     console.error('Error while creating User : '+errResponse.data.errorMessage);
                                     deferred.reject(errResponse);
                                  }
                              );
                          return deferred.promise;
                  }

          function readListClass(){
            console.log('Fetching readListFclass');
                    var deferred = $q.defer();
                    $http.get(urls.USER_SERVICE_API + 'fclass/')
                               .then(
                                  function (response) {
                                  console.log('Fetched successfully listFclass with id :');
                                  $localStorage.listFclass = response.data;
                                  deferred.resolve(response.data);
                                             },
                                  function (errResponse) {
                                  console.error('Error while loading listFclass with id :');
                                  deferred.reject(errResponse);
                                           }
                                   );
                        return deferred.promise;
          }

           function removeElementFclass(id) {
                console.log('Rimuovi elemento con: '+id);
                var deferred = $q.defer();
                $http.delete(urls.USER_SERVICE_API + 'fclass/' + id)
                    .then(
                        function (response) {
                            readListClass();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while removing User with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

           function setFfBehaviour(id){
            console.log('Fetching ffbehaviour with id :'+ id);
                               var deferred = $q.defer();
                               $http.get(urls.USER_SERVICE_API + 'ffbehaviour/' + id)
                                          .then(
                                             function (response) {
                                             console.log('Fetched successfully ffbehaviour with id :'+ id);
                                             $localStorage.ffbehaviour = response.data;
                                             deferred.resolve(response.data);
                                                        },
                                             function (errResponse) {
                                             console.error('Error while loading ffbehaviour with id :'+ id );
                                             deferred.reject(errResponse);
                                                      }
                                              );
                                   return deferred.promise;

           }


        }
    ]);