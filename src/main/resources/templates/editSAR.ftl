<html>
    <head>
        <title> Common Criteria | Security Assurance Requirements</title>
        <link rel="shortcut icon" href="Images/favicon1.ico">
        <link href="css/bootstrap.css" rel="stylesheet"/>
        <link href="css/editSAR.css" rel="stylesheet"/>
    </head>
    <body>
        <div id="leftSection">
            <p><strong>CC Part 3 </strong>catalogues the set of functional components
            and organises them in families and classes.</p>
            <p>Security functional components establishes a set
            of functional components that serve as standard templates
            upon which to base functional requirements for TOEs.</p>


            <h3>Search Assurance Requirements</h3>
            <select name="aclasses" ng-model="Name">
                <option ng-repeat="a in ctrl.getAllAClasses()" value="{{a.id}}"">{{a.name}} - {{a.id}}</option>
            </select>
            <br />
            <button ng-click="ctrl.searchAssuranceRequirements(Name)" class="btn btn-success custom-width" ng-disabled="!Name || Name.length == 0"><i class="fa fa-search"></i></button>
            <br />
            <br />




            <h3>Selected Elements</h3>
            <input type="button" class="btn btn-success custom-width" value="Show" ng-click="ctrl.setListFco()"/>
        </div>

        <div id="rightSection">
            <h3> List of Assurance Paradigm</h3>
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
                    <tr ng-repeat="u in ctrl.getAllAClasses()">
                        <td>{{u.id}}</td>
                    	<td>{{u.name}}</td>
                    	<td> <button  ng-click="ctrl.selectUser(u.id)" class="btn btn-success custom-width"><i class="fa fa-caret-right"></i></button></td>
                    </tr>
                </tbody>
        </div>

    </body>
</html>