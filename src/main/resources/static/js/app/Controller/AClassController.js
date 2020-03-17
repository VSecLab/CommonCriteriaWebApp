'use strict';

angular.module('crudApp').controller('AClassController',
    ['AClassService', '$scope','$window',
    function(AClassService, $scope, $window ) {
        var self = this;
        self.aclass = {};
        self.aclasses = [];

        self.getAllAClasses = getAllAClasses;

        self.searchAssuranceRequirements = searchAssuranceRequirements;

        self.successMessage = '';
        self.errorMessage = '';
        self.done = false;

        function getAllAClasses() {
            return AClassService.getAllAClasses();
        }


        // Get id of AClass from  Search Assurance Requirements box
        function searchAssuranceRequirements(id){
                      $window.alert("searchAssuranceRequirements");
                      AClassService.setacomponent(id).then(
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

}
]);