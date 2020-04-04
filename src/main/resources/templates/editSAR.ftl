<html>
    <head>
        <title> Common Criteria | Security Assurance Requirements</title>
        <link rel="shortcut icon" href="Images/favicon1.ico">
        <link href="css/editSAR.css" rel="stylesheet"/>
    </head>
    <body>
            <div class="modifyDIV">
        <div id="leftSection">
            <p><strong>Security Assurance Components</strong>, as defined in CC Part 3, are
            the basis for the security assurance requirements expressed in a Protection Profile (PP)
            ora a Security Target (ST).</p>
            <p> In this section you can browse a cataologe of Assurance Classes and Assurance Components.
            You can search for your favourite Evaluation Assurance Level and see what components it needs to
            be implemented.
            </p>


            <h3> Choose Evaluation Assurance Level </h3>
            <select name="eal" ng-model="NameEAL">
                <option ng-repeat="a in ctrl.getEal()" value="{{a.id}}"">{{a.id}} - {{a.name}}</option>
            </select>
            <br />
            <button ng-click="ctrl.showEvaluationAssuranceLevel(NameEAL)" class="btn btn-success custom-width" ng-disabled="!NameEAL || NameEAL.length == 0"><i class="fa fa-search"></i></button>
            <br />
            <br />


            <h3>Search Assurance Requirements</h3>
            <select name="aclasses" ng-model="Name" style="text-transform: capitalize";>
                <option ng-repeat="a in ctrl.getAllAClasses()" value="{{a.id}}"">{{a.name}} - {{a.id}}</option>
            </select>
            <br />
            <button ng-click="ctrl.showAssuranceRequirements(Name)" class="btn btn-success custom-width" ng-disabled="!Name || Name.length == 0"><i class="fa fa-search"></i></button>
            <br />
            <br />




            <h3>Selected Elements</h3>
            <input type="button" class="btn btn-success custom-width" value="Show" ng-click="ctrl.showSelectedElementAssuranceRequirements()"/>
        </div>

        <div id="rightSection">
            <h3>List of Assurance Paradigm</h3>
            <br />
            <table>
                <thead>
                    <tr>
                        <th> ID </th>
                        <th> NAME </th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="a in ctrl.getAllAClasses()">
                        <td>{{a.id}}</td>
                    	<td>{{a.name}}</td>
                    	<td> <button  ng-click="ctrl.showAClassStructure(a.id)" class="btn btn-success custom-width"><i class="fa fa-caret-right"></i></button></td>
                    </tr>
                </tbody>
                </table>
        </div>
</div>


    </body>


<style>
select {
    text-transform: capitalize;
}
<style>

</html>
