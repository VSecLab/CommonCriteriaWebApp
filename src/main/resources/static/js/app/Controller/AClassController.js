
'use strict';

angular.module('crudApp').controller('AClassController',
    ['AClassService', '$scope', '$window',
        function(AClassService, $scope, $window) {
            var self = this;


            // AClass
            self.aclass = {};
            self.aclasses = [];
            self.getAllAClasses = getAllAClasses;
            self.getIdaclass = getIdaclass;

            // click lente di ingrandimento editSAR
            self.showAssuranceRequirements = showAssuranceRequirements;
            // click on element of list of assurance paradigm
            self.showAClassStructure = showAClassStructure;
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
            self.IdAComponent = {};
            self.getIdAComponent = getIdAComponent;
            self.acomponentinaclass = [];
            self.getAComponentInAClass = getAComponentInAClass;

            // AcoObjectives
            self.acoobjectives = [];
            self.getAcoObjectives = getAcoObjectives;

            // AeDeveloper
            self.aedeveloper = [];
            self.getAeDeveloper = getAeDeveloper;

            // AeContent
            self.aecontent = [];
            self.getAeContent = getAeContent;

            // AeEvaluator
            self.aeevaluator = [];
            self.getAeEvaluator = getAeEvaluator;


            self.successMessage = '';
            self.errorMessage = '';
            self.done = false;


            // AClass functions
            function getAllAClasses() {
                return AClassService.getAllAClasses();
            }

            function showAClassStructure(id) {
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


            //  AcIntroduction function
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
                AClassService.setAComponent(id).then(
                    function() {
                        console.log('ID ' + id + " è stato cliccato setAFamily");
                    },
                    function(errResponse) {
                        console.error('Error setAFamily ' + id + ', Error :' + errResponse.data);
                    }
                );
            }


            // AfObjectives function
            function getAfObjectives() {
                return AClassService.getAfObjectives();
            }

            // AfLevellingCriteria function
            function getAfLevellingCriteria() {
                return AClassService.getAfLevellingCriteria();
            }

            // AfApplicationNotes function
            function getAfApplicationNotes() {
                return AClassService.getAfApplicationNotes();
            }

            // AComponent functions
            function getAComponent() {
                return AClassService.getAComponent();
            }

            function getAComponentInAClass() {
                return AClassService.getAComponentInAClass();
            }

            function getIdAComponent() {
                return AClassService.getIdAComponent();
            }


            // AcoObjectives function
            function getAcoObjectives() {
                return AClassService.getAcoObjectives();
            }


            // AeDeveloper function
            function getAeDeveloper() {
                return AClassService.getAeDeveloper();
            }

            // AeContent function
            function getAeContent() {
                return AClassService.getAeContent();
            }


            // AeEvaluator function
            function getAeEvaluator() {
                return AClassService.getAeEvaluator();
            }

            //click browse aclassstructure
            function showAComponentStructure(id) {
                $window.location.href = "http://localhost:8080/#/afamilystructure/acomponentstructure";
                AClassService.setAcoObjectives(id)
                    .then(
                        function() {
                            console.log('ID ' + id + " è stato cliccato FfBehaviour");
                        },
                        function(errResponse) {
                            console.error('Error AfLevellingCriteria ' + id + ', Error :' + errResponse.data);
                        }
                    );
                AClassService.setAeDeveloper(id)
                    .then(
                        function() {
                            console.log('ID ' + id + " è stato cliccato FfBehaviour");
                        },
                        function(errResponse) {
                            console.error('Error AfLevellingCriteria ' + id + ', Error :' + errResponse.data);
                        }
                    );
                AClassService.setAeContent(id)
                    .then(
                        function() {
                            console.log('ID ' + id + " è stato cliccato FfBehaviour");
                        },
                        function(errResponse) {
                            console.error('Error AfLevellingCriteria ' + id + ', Error :' + errResponse.data);
                        }
                    );

                AClassService.setAeEvaluator(id)
                    .then(
                        function() {
                            console.log('ID ' + id + " è stato cliccato FfBehaviour");
                        },
                        function(errResponse) {
                            console.error('Error AfLevellingCriteria ' + id + ', Error :' + errResponse.data);
                        }
                    );

            }

            //click lente di ingrandimento editSAR
            function showAssuranceRequirements(id) {
                console.log("assurance requirements id:" + id)
                $window.location.href = "http://localhost:8080/#/assurancerequirementsstructure";
                AClassService.setAComponentInAClass(id)
                    .then(
                        function() {
                            console.log('ID ' + id + " è stato cliccato FfBehaviour");
                        },
                        function(errResponse) {
                            console.error('Error AfLevellingCriteria ' + id + ', Error :' + errResponse.data);
                        }
                    );
            }

        }
    ]);