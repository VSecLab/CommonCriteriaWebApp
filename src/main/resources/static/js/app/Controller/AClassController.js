'use strict';

angular.module('crudApp').controller('AClassController',
    ['AClassService', '$scope','$window',
    function(AClassService, $scope, $window ) {
        var self = this;
        // AClass
        self.aclass = {};
        self.aclasses = [];
        self.getAllAClasses = getAllAClasses;
        self.selectAClass = selectAClass;
        self.getIdaclass = getIdaclass;

        // Drop list in editSAR
        self.searchAssuranceRequirements = searchAssuranceRequirements;


        // AcIntroduction
        self.acintroduction = {};
        self.acintroductions = [];
        self.getAcIntroduction = getAcIntroduction;


        // AFamily
        self.afamily = [];
        self.getAFamily = getAFamily;


        self.successMessage = '';
        self.errorMessage = '';
        self.done = false;


        // funzioni aclass
        function getAllAClasses() {
            return AClassService.getAllAClasses();
        }
        function selectAClass(id) {
            self.successMessage='';
            self.errorMessage='';
            AClassService.setAClass(id)
            .then(
                function (response) {
                    $window.location.href = 'http://localhost:8080/#/aclassstructure';
                    console.log('ID '+id + " è stato cliccato selectAClass");
                },
                function (errResponse) {
                    console.error('Error selectUser ' + id + ', Error :' + errResponse.data);
                }
            );
            AClassService.setAcIntroduction(id)
            .then(
                function (response) {
                    console.log('ID '+id + " è stato cliccato selectUser");
                },
                function (errResponse) {
                    console.error('Error selectUser ' + id + ', Error :' + errResponse.data);
                }
            );
            AClassService.setAFamily(id).then(
                function () {
                    console.log('ID '+id + " è stato cliccato setAFamily");
                },
                function (errResponse) {
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

        // Droplist editSAR
        function searchAssuranceRequirements(id){
            AClassService.setAComponent(id)
            .then(
                function () {
                    $window.location.href = 'http://localhost:8080/#/acomponent';
                    console.log('ID '+ id + " è stato cliccato setAComponent");
                },
                function (errResponse) {
                    console.error('Error setFcomponent ' + id + ', Error :' + errResponse.data);
                }
            );
        }



        // AFamily function
        function getAFamily() {
            return AClassService.getAFamily();
        }







    }
]);