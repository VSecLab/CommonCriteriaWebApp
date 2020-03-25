
'use strict';

angular.module('crudApp').controller('AClassController',
    ['AClassService', '$scope', '$window',
        function(AClassService, $scope, $window) {
            var self = this;

            // AClass
            self.aclass = {};
            self.aclasses = [];
            self.getAllAClasses = getAllAClasses;
            self.selectAClass = selectAClass;
            self.getIdaclass = getIdaclass;


            // click browse on aclassstructure
            self.showAFamilyStructure = showAFamilyStructure;
            // click browse on afamilystructure
            self.showAComponentStructure = showAComponentStructure;

            // AcIntroduction
            self.acintroduction = {};
            self.acintroductions = [];
            self.getAcIntroduction = getAcIntroduction;

            // AFamily
            self.afamily = [];
            self.getAFamily = getAFamily;
            self.getIdAFamily = getIdAFamily;

            // AfObjectives
            self.afobjectives = [];
            self.getAfObjectives = getAfObjectives;

            // AfLevellinCriteria
            self.aflevellingcriteria = [];
            self.getAfLevellingCriteria = getAfLevellingCriteria;

            // AfApplicationNotes
            self.afapplicationnotes = [];
            self.getAfApplicationNotes = getAfApplicationNotes;

            // AComponent
            self.acomponent = [];
            self.getAComponent = getAComponent;



            self.successMessage = '';
            self.errorMessage = '';
            self.done = false;


            // funzioni aclass
            function getAllAClasses() {
                return AClassService.getAllAClasses();
            }

            function selectAClass(id) {
                self.successMessage = '';
                self.errorMessage = '';
                AClassService.setAClass(id)
                    .then(
                        function(response) {
                            $window.location.href = 'http://localhost:8080/#/aclassstructure';
                            console.log('ID ' + id + " è stato cliccato selectAClass");
                        },
                        function(errResponse) {
                            console.error('Error selectUser ' + id + ', Error :' + errResponse.data);
                        }
                    );
                AClassService.setAcIntroduction(id)
                    .then(
                        function(response) {
                            console.log('ID ' + id + " è stato cliccato selectUser");
                        },
                        function(errResponse) {
                            console.error('Error selectUser ' + id + ', Error :' + errResponse.data);
                        }
                    );
                AClassService.setAFamily(id).then(
                    function() {
                        console.log('ID ' + id + " è stato cliccato setAFamily");
                    },
                    function(errResponse) {
                        console.error('Error setAFamily ' + id + ', Error :' + errResponse.data);
                    }
                );
            }

            function getIdaclass() {
                return AClassService.getIdaclass();
            }


            // funzioni AcIntroduction
            function getAcIntroduction() {
                return AClassService.getAcIntroduction();
            }



            // AFamily function
            function getAFamily() {
                return AClassService.getAFamily();
            }

            function getIdAFamily() {
                return AClassService.getIdAFamily();
            }

            //click browse aclassstructure
            function showAFamilyStructure(id) {
                $window.location.href = "http://localhost:8080/#/afamilystructure";
                AClassService.setAfObjectives(id)
                    .then(
                        function() {
                            console.log('ID ' + id + " è stato cliccato FfBehaviour");
                        },
                        function(errResponse) {
                            console.error('Error FfBehaviour ' + id + ', Error :' + errResponse.data);
                        }
                    );
                AClassService.setAfLevellingCriteria(id)
                    .then(
                        function() {
                            console.log('ID ' + id + " è stato cliccato FfBehaviour");
                        },
                        function(errResponse) {
                            console.error('Error AfLevellingCriteria ' + id + ', Error :' + errResponse.data);
                        }
                    );
                AClassService.setAfApplicationNotes(id)
                    .then(
                        function() {
                            console.log('ID ' + id + " è stato cliccato FfBehaviour");
                        },
                        function(errResponse) {
                            console.error('Error AfLevellingCriteria ' + id + ', Error :' + errResponse.data);
                        }
                    );
                AClassService.setAComponent(id)
                    .then(
                        function() {
                            console.log('ID ' + id + " è stato cliccato FfBehaviour");
                        },
                        function(errResponse) {
                            console.error('Error AfLevellingCriteria ' + id + ', Error :' + errResponse.data);
                        }
                    );
            }


            // AfObjectives
            function getAfObjectives() {
                return AClassService.getAfObjectives();
            }

            // AfLevellingCriteria
            function getAfLevellingCriteria() {
                return AClassService.getAfLevellingCriteria();
            }

            // AfApplicationNotes
            function getAfApplicationNotes() {
                return AClassService.getAfApplicationNotes();
            }

            // AComponent
            function getAComponent() {
                return AClassService.getAComponent();
            }




            //click browse aclassstructure
            function showAComponentStructure(id) {
                $window.location.href = "http://localhost:8080/#/afamilystructure/acomponentstructure";
            }


        }
    ]);