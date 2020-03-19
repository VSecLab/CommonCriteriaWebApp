'use strict';

angular.module('crudApp').controller('AClassController',
    ['AClassService', '$scope','$window',
    function(AClassService, $scope, $window ) {
        var self = this;
        self.aclass = {};
        self.aclasses = [];

        self.getAllAClasses = getAllAClasses;

        self.searchAssuranceRequirements = searchAssuranceRequirements;

        //----
        self.selectAClass = selectAClass;
        //----

        self.successMessage = '';
        self.errorMessage = '';
        self.done = false;

        function getAllAClasses() {
            return AClassService.getAllAClasses();
        }


        // Get id of AClass from  Search Assurance Requirements box
        function searchAssuranceRequirements(id){
            $window.alert("searchAssuranceRequirements");
            AClassService.setacomponent(id)
            .then(
                function () {
                    $window.alert("setacomponent in controller");
                    $window.location.href = 'http://localhost:8080/#/acomponent';
                    console.log('ID '+ id + " è stato cliccato setacomponent");
                },
                function (errResponse) {
                    console.error('Error setacomponent ' + id_acomponent + ', Error :' + errResponse.data);
                }
            );
        }


        function selectAClass(id) {
            self.successMessage='';
            self.errorMessage='';
            $window.location.href = 'http://localhost:8080/#/aclassstructure';
            /*
            UserService.setUser(id)
            .then(
                function (response) {
                    $window.location.href = 'http://localhost:8080/#/fclassstructure';
                    console.log('ID '+id + " è stato cliccato selectUser");
                    console.log(" Elementi doppi: " + getAllClass());
                },
                function (errResponse) {
                    console.error('Error selectUser ' + id + ', Error :' + errResponse.data);
                }
            );
            */
        }

}
]);