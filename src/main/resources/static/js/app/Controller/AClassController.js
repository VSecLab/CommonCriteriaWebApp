'use strict';

angular.module('crudApp').controller('AClassController',
    ['AClassService', '$scope','$window',
    function(AClassService, $scope, $window ) {
        var self = this;
        // AClass
        self.aClass = {};
        self.aClasses = [];
        self.getAllAClasses = getAllAClasses;
        self.selectAClass = selectAClass;

        // Drop list in ediSAR
        self.searchAssuranceRequirements = searchAssuranceRequirements;


        self.successMessage = '';
        self.errorMessage = '';
        self.done = false;


        function getAllAClasses() {
            return AClassService.getAllAClasses();
        }


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
        }



}
]);