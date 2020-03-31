
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

            // ListAssuranceRequirements
            self.listassurancerequirements = [];
            self.showSelectedElementAssuranceRequirements = showSelectedElementAssuranceRequirements;
            self.getListAssuranceRequirements = getListAssuranceRequirements;
            self.addElementListAssuranceRequirements = addElementListAssuranceRequirements;
            self.removeElementListAssuranceRequirements = removeElementListAssuranceRequirements;
            self.downloadPDFSAR = downloadPDFSAR;




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
                            console.log("showAClassStructure, ERROR AcIntroduction from AClass with id: " + id + "ERROR: " + errResponse.data);
                        }
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
                            console.log("showAFamilyStructure, selected AfObjectives from AFamily with id: " + id);
                        },
                        function(errResponse) {
                            console.log("showAFamilyStructure, ERROR AfObjectives from AFamily with id: " + id + "ERROR: " + errResponse.data);
                        }
                    );
                AClassService.setAfLevellingCriteria(id)
                    .then(
                        function() {
                            console.log("showAFamilyStructure, selected AfLevellingCriteria from AFamily with id: " + id);
                        },
                        function(errResponse) {
                            console.log("showAFamilyStructure, ERROR AfLevellingCriteria from AFamily with id: " + id + "ERROR: " + errResponse.data);
                        }
                    );
                AClassService.setAfApplicationNotes(id)
                    .then(
                        function() {
                            console.log("showAFamilyStructure, selected AfApplicationNotes from AFamily with id: " + id);
                        },
                        function(errResponse) {
                            console.log("showAFamilyStructure, ERROR AfApplicationNotes from AFamily with id: " + id + "ERROR: " + errResponse.data);
                        }
                    );
                AClassService.setAComponent(id)
                    .then(
                        function() {
                            console.log("showAFamilyStructure, selected AComponent from AFamily with id: " + id);
                        },
                        function(errResponse) {
                            console.log("showAFamilyStructure, ERROR AComponent from AFamily with id: " + id + "ERROR: " + errResponse.data);
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
                AClassService.setAcoObjectives(id)
                    .then(
                        function() {
                            console.log("showAComponentStructure, selected AcoObjectives from AComponent with id: " + id);
                        },
                        function(errResponse) {
                            console.log("showAComponentStructure, ERROR AcoObjectives from AComponent with id: " + id + "ERROR: " + errResponse.data);
                        }
                    );
                AClassService.setAcoDependsOnComponent(id)
                    .then(
                        function() {
                            console.log("showAComponentStructure, selected AcoDependsOnComponent from AComponent with id: " + id);
                        },
                        function(errResponse) {
                            console.log("showAComponentStructure, ERROR AcoDependsOnComponent from AComponent with id: " + id + "ERROR: " + errResponse.data);
                        }
                    );
                AClassService.setAcoApplicationNotes(id)
                    .then(
                        function() {
                            console.log("showAComponentStructure, selected AcoApplicationNotes from AComponent with id: " + id);
                        },
                        function(errResponse) {
                            console.log("showAComponentStructure, ERROR AcoApplicationNotes from AComponent with id: " + id + "ERROR: " + errResponse.data);
                        }
                    );
                AClassService.setAeDeveloper(id)
                    .then(
                        function() {
                            console.log("showAComponentStructure, selected AeDeveloper from AComponent with id: " + id);
                        },
                        function(errResponse) {
                            console.log("showAComponentStructure, ERROR AeDeveloper from AComponent with id: " + id + "ERROR: " + errResponse.data);
                        }
                    );
                AClassService.setAeContent(id)
                    .then(
                        function() {
                            console.log("showAComponentStructure, selected AeContent from AComponent with id: " + id);
                        },
                        function(errResponse) {
                            console.log("showAComponentStructure, ERROR AeContent from AComponent with id: " + id + "ERROR: " + errResponse.data);
                        }
                    );
                AClassService.setAeEvaluator(id)
                    .then(
                        function() {
                            console.log("showAComponentStructure, selected AeEvaluator from AComponent with id: " + id);
                        },
                        function(errResponse) {
                            console.log("showAComponentStructure, ERROR AeEvaluator from AComponent with id: " + id + "ERROR: " + errResponse.data);
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
                            console.log("showAComponentStructure, ERROR AComponent from AClass with id: " + id + "ERROR: " + errResponse.data);
                        }
                    );
            }


            // ListAssuranceRequirements
            function showSelectedElementAssuranceRequirements() {
                console.log('Fetching elements from List of Security Assurance Requirements');
                $window.location.href = "http://localhost:8080/#/selectedelementassurancerequirements";
                AClassService.readElementListAssuranceRequirements()
                    .then(
                        function(response) {
                            console.log('Click on List of Security Assurance Requirements');
                        },
                        function(errResponse) {
                            $window.alert('Empty List of Security Assurance Requirements');
                            console.error('ERROR in List of Security Assurance Requirements');
                        }
                    );

            }

            function getListAssuranceRequirements() {
                return AClassService.getListAssuranceRequirements();
            }

            function addElementListAssuranceRequirements(listassurancerequirements) {

                console.log('Creating List of Security Assurance Requirements');
                AClassService.createElementListAssuranceRequirements(listassurancerequirements)
                    .then(
                        function() {
                            console.log('Element added to the List of Security Assurance Requirements');
                            $window.alert('Element added to the List of Security Assurance Requirements');

                        },
                        function(errResponse) {

                            console.error('Element already added to the List of Security Assurance Requirements');
                            $window.alert('Element already added to the List of Security Assurance Requirements');

                        }
                    );
            }


            function removeElementListAssuranceRequirements(id) {
                console.log('Removing ' + id + ' from the List of Security Assurance Requirements');
                AClassService.removeElementListAssuranceRequirements(id)
                    .then(
                        function() {
                            console.log(id + ' removed successfully from the List of Security Assurance Requirements');
                        },
                        function(errResponse) {
                            console.error('ERROR while removing ' + id + ' from the List of Security Assurance Requirements. ERROR: ' + errResponse.data);
                        }
                    );

            }



            function downloadPDFSAR() {
                console.log('Scarica PDF');
                html2canvas(document.getElementById('download'), {
                    onrendered: function(canvas) {
                        var data = canvas.toDataURL();
                        var docDefinition = {
                            content: [{

                                image: data,
                                width: 500,
                            }]
                        };
                        pdfMake.createPdf(docDefinition).download("CatalogueAssuranceRequirements.pdf");
                    }
                });
            }

        }
    ]);