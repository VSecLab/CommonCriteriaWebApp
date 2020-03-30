
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

            // AcoDependsOnComponent
            self.acodependsoncomponent = [];
            self.getAcoDependsOnComponent = getAcoDependsOnComponent;

            // AcoApplicationNotes
            self.acoapplicationnotes = [];
            self.getAcoApplicationNotes = getAcoApplicationNotes;

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
                            console.log("showAClassStructure, selected AClass with id: " + id);
                        },
                        function(errResponse) {
                            console.log("showAClassStructure, ERROR AClass with id: " + id + "ERROR: " + errResponse.data);
                        }
                    );
                AClassService.setAcIntroduction(id)
                    .then(
                        function(response) {
                            console.log("showAClassStructure, selected AcIntroduction from AClass with id: " + id);
                        },
                        function(errResponse) {
                            console.log("showAClassStructure, ERROR AcIntroduction from AClass with id: " + id + "ERROR: " + errResponse.data);                        }
                    );
                AClassService.setAFamily(id).then(
                    function() {
                            console.log("showAClassStructure, selected AFamily from AClass with id: " + id);
                    },
                    function(errResponse) {
                            console.log("showAClassStructure, ERROR AFamily from AClass with id: " + id + "ERROR: " + errResponse.data);
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
                            console.log("showAFamilyStrucutre, selected AfObjectives from AFamily with id: " + id);
                        },
                        function(errResponse) {
                            console.log("showAFamilyStructure, ERROR AfObjectives from AFamily with id: " + id + "ERROR: " + errResponse.data);
                        }
                    );
                AClassService.setAfLevellingCriteria(id)
                    .then(
                        function() {
                            console.log("showAFamilyStrucutre, selected AfLevellingCriteria from AFamily with id: " + id);
                        },
                        function(errResponse) {
                            console.log("showAFamilyStructure, ERROR AfLevellingCriteria from AFamily with id: " + id + "ERROR: " + errResponse.data);
                        }
                    );
                AClassService.setAfApplicationNotes(id)
                    .then(
                        function() {
                            console.log("showAFamilyStrucutre, selected AfApplicationNotes from AFamily with id: " + id);
                        },
                        function(errResponse) {
                            console.log("showAFamilyStructure, ERROR AfApplicationNotes from AFamily with id: " + id + "ERROR: " + errResponse.data);
                        }
                    );
                AClassService.setAComponent(id)
                    .then(
                        function() {
                            console.log("showAFamilyStrucutre, selected AComponent from AFamily with id: " + id);
                        },
                        function(errResponse) {
                            console.log("showAFamilyStructure, ERROR AComponent from AFamily with id: " + id + "ERROR: " + errResponse.data);
                        }
                    );
                /*
                AcoDependsOnComponent e AcoObjectives l'ho dovuto mettere qui perchè,
                anche se è di AComponent, mi serviva l'id della AFamily per fare
                la query.. perchè ho sbagliato nel backend
                */
                AClassService.setAcoDependsOnComponent(id)
                    .then(
                        function() {
                            console.log("showAFamilyStrucutre, selected AcoDependsOnComponent from AFamily with id: " + id);
                        },
                        function(errResponse) {
                            console.log("showAFamilyStructure, ERROR AcoDependsOnComponent from AFamily with id: " + id + "ERROR: " + errResponse.data);
                        }
                    );
                AClassService.setAcoObjectives(id)
                    .then(
                        function() {
                            console.log("showAFamilyStrucutre, selected AcoObjectives from AFamily with id: " + id);
                        },
                        function(errResponse) {
                            console.log("showAFamilyStructure, ERROR AcoObjectives from AFamily with id: " + id + "ERROR: " + errResponse.data);
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

            // AcoDependsOnComponent function
            function getAcoDependsOnComponent() {
                return AClassService.getAcoDependsOnComponent();
            }

            // AcoApplicationNotes function
            function getAcoApplicationNotes() {
                return AClassService.getAcoApplicationNotes();
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
                AClassService.setAcoApplicationNotes(id)
                    .then(
                        function() {
                            console.log("showAComponentStructure, selected AcoApplicationNotes from AComponent with id: " + id);
                        },
                        function(errResponse) {
                            console.log("showAComponentStrucure, ERROR AcoApplicationNotes from AComponent with id: " + id + "ERROR: " + errResponse.data);
                        }
                    );
                AClassService.setAeDeveloper(id)
                    .then(
                        function() {
                             console.log("showAComponentStructure, selected AeDeveloper from AComponent with id: " + id);
                         },
                         function(errResponse) {
                             console.log("showAComponentStrucure, ERROR AeDeveloper from AComponent with id: " + id + "ERROR: " + errResponse.data);
                         }
                    );
                AClassService.setAeContent(id)
                    .then(
                        function() {
                             console.log("showAComponentStructure, selected AeContent from AComponent with id: " + id);
                         },
                         function(errResponse) {
                             console.log("showAComponentStrucure, ERROR AeContent from AComponent with id: " + id + "ERROR: " + errResponse.data);
                         }
                    );
                AClassService.setAeEvaluator(id)
                    .then(
                        function() {
                             console.log("showAComponentStructure, selected AeEvaluator from AComponent with id: " + id);
                         },
                         function(errResponse) {
                             console.log("showAComponentStrucure, ERROR AeEvaluator from AComponent with id: " + id + "ERROR: " + errResponse.data);
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
                                 console.log("showAssuranceRequirements, selected AComponent from AClass with id: " + id);
                             },
                             function(errResponse) {
                                 console.log("showAComponentStrucure, ERROR AComponent from AClass with id: " + id + "ERROR: " + errResponse.data);
                             }
                    );
            }

        }
    ]);