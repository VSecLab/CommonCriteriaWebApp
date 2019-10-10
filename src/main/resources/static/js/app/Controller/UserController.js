'use strict';

angular.module('crudApp').controller('UserController',
    ['UserService', '$scope','$window', function( UserService, $scope, $window ) {

        var self = this;
        self.user = {};
        self.users=[];
        self.fcintroduction = {};
        self.fcintroductions =[];
        self.listFclass =[];
        self.ffamily = [];
        self.fcomponent = [];
        self.getFfamily = getFfamily;
        self.searchRequirements = searchRequirements;
        self.Name ;
        self.myText = '';
        self.getAllClass = getAllClass;
        self.getAllUsers = getAllUsers;
        self.selectUser = selectUser;
        self.add = add;
        self.done = false;

        self.successMessage = '';
        self.errorMessage = '';
        self.setFcInformativeNotes;
        self.fcinformationsnotes = [];
        self.getListFcInformative = getListFcInformative;
        self.getListFcomponent = getListFcomponent;

        self.showDipendenze = showDipendenze;
        self.fcodipendencies = [];
        self.getListFcodipendencies = getListFcodipendencies;


        self.showFcoDescription = showFcoDescription;
        self.fcoevaluatornotes = [];
        self.getFcoEvaluatorNotes = getFcoEvaluatorNotes;
        self.fcousernotes = [];
        self.getFcoUserNotes = getFcoUserNotes;


        self.setListFclass= setListFclass;
        self.getListFclass = getListFclass;
        self.removeFclass =removeFclass;
        self.downloadpdf = downloadpdf;

        self.listffbehaviour = [];
        self.showFfBehaviour = showFfBehaviour;
        self.getListFfBehaivour = getListFfBehaivour;



        function getAllUsers(){
                  return UserService.getAllUsers();
        }

        function getAllClass(){
                    return UserService.getFci();
        }

        function getListFcInformative(){
             return UserService.getListFcInformativeNotes();
        }

        function getFfamily(){
            return UserService.getListFfamily();
        }

        function getListFcomponent() {
            return UserService.getListFcomponent();
        }
         function getListFcodipendencies() {
             return UserService.getListFcodipendencies();
           }
         function getFcoEvaluatorNotes() {
                     return UserService.getFcoEvaluatorNotes();
                   }
         function getListFclass(){
                    return UserService.getListFclass();
         }
         function getListFfBehaivour(){
                    return UserService.getFfBehaviour();
         }

         function getFcoUserNotes(){
                    return UserService.getFcoUserNotes();
         }

        function selectUser(id) {
            self.successMessage='';
            self.errorMessage='';
            UserService.setUser(id).then(
                function () {
                  $window.location.href = 'http://localhost:8080/#/fclassstructure';
                  console.log('ID '+id + " è stato cliccato selectUser");

                },
                function (errResponse) {
                    console.error('Error selectUser ' + id + ', Error :' + errResponse.data);
                }
            );
               UserService.setFcInformativeNotes(id).then(
                 function () {
                     console.log('ID '+id + " è stato cliccato setFcInformativeNotes");

                },
                 function (errResponse) {
                      console.error('Error setFcInformativeNotes ' + id + ', Error :' + errResponse.data);
                }
            );
            UserService.setFfamily(id).then(
                 function () {
                      console.log('ID '+id + " è stato cliccato setFfamily");
                          },
                  function (errResponse) {
                       console.error('Error setFamily ' + id + ', Error :' + errResponse.data);
                     }
            );
       }



            function searchRequirements(Name){

              if (typeof (Name) == "undefined" || Name == "") {
                            $window.alert("INSERIRE ID");
                            return;
                        }
              UserService.setFcomponent(Name).then(
               function () {
                 $window.location.href = 'http://localhost:8080/#/fcomponent';
                 console.log('ID '+ Name + " è stato cliccato setFcomponent");
                   },
               function (errResponse) {
                   console.error('Error setFcomponent ' + Name + ', Error :' + errResponse.data);
                   }
              );
              }


            function showDipendenze(id){

            UserService.setFcodipendencies(id).then(
                  function () {
                    $window.location.href = 'http://localhost:8080/#/fcomponent/fcodependencies';
                    console.log('ID '+ id + " è stato cliccato setFcodipendencies");
                       },
                  function (errResponse) {
                     $window.alert('NON PRESENTA DIPENDENZE: ' +id);
                     console.error('Error setFcodipendencies ' + id + ', Error :' + errResponse.data);

                     }
                );

            }

            function showFcoDescription(id){

            UserService.setFcoEvaluatorNotes(id).then(
                  function () {

                    console.log('ID '+ id + " è stato cliccato setFcoDescription");

                       },
                  function (errResponse) {

                     console.error('Error setFcodipendencies ' + id + ', Error :' + errResponse.data);

                     }
                );
            UserService.setFcoUserNotes(id).then(
                  function () {
                    $window.location.href = 'http://localhost:8080/#/fcomponent/fcodescription';
                    console.log('ID '+ id + " è stato cliccato setFcoDescription");

                       },
                  function (errResponse) {

                     console.error('Error setFcodipendencies ' + id + ', Error :' + errResponse.data);

                     }
                );

            }

            function add(user) {

                        console.log('Creazione Preferiti');
                        UserService.createUser(user)
                            .then(
                                function () {

                                    console.log('Aggiunto con successo ai preferiti');
                                    $window.alert('Elemento aggiunto con successo ai preferiti' );


                                },
                                function (errResponse) {

                                 console.error('Errore: elemento già ai preferiti');
                                 $window.alert('Elemento già presente nei preferiti');

                                }
                            );
                    }

            function setListFclass(){
                   console.log('Get Preferiti');
                        UserService.readListClass()
                            .then(
                                function () {
                                 $window.location.href = 'http://localhost:8080/#/preferiti';

                                    console.log('Cliccato setListFclass');


                                },
                                function (errResponse) {
                                    $window.alert('Lista dei preferiti vuota' );
                                    console.error('Errore setListFclass');


                                }
                            );

            }

            function removeFclass(id){
              console.log('Rimuovi dai preferiti:  '+id);
                        UserService.removeElementFclass(id)
                            .then(
                                function(){
                                    console.log('ID '+id + ' removed successfully');
                                },
                                function(errResponse){
                                    console.error('Error while removing user '+id +', Error :'+errResponse.data);
                                }
                            );

            }

            function downloadpdf(){
            console.log('Scarica PDF');
                 html2canvas(document.getElementById('exportthis'), {
                        onrendered: function (canvas) {
                             var data = canvas.toDataURL();
                             var docDefinition = {
                                 content: [{

                                    image: data,
                                    width: 500,
                    }]
                };
                pdfMake.createPdf(docDefinition).download("preferiti.pdf");
            }
        });
     }

             function showFfBehaviour(id){

               UserService.setFfBehaviour(id).then(
                               function () {
                                 console.log('ID '+ id + " è stato cliccato FfBehaviour");
                                    },
                               function (errResponse) {
                                  console.error('Error FfBehaviour ' + id + ', Error :' + errResponse.data);

                                  }
                             );

             }




        }
    ]);