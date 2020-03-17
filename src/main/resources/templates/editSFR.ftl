<html>
    <head>
        <title> Common Criteria | Security Functional Requirements</title>
        <link rel="shortcut icon" href="Images/favicon1.ico">
        <link href="css/bootstrap.css" rel="stylesheet"/>
        <link href="css/editSAR.css" rel="stylesheet"/>
    </head>
    <body>
        <div id="leftSection">

            <p><strong>CC Part 2 </strong>catalogues the set of functional components
            and organises them in families and classes.</p>
            <p>Security functional components establishes a set
            of functional components that serve as standard templates
            upon which to base functional requirements for TOEs.</p>


            <h3>Search Assurance Requirements</h3>
            <select name="users" ng-model="Name">
                <option ng-repeat="u in ctrl.getAllUsers()" value="{{u.id}}"">{{u.name}} - {{u.id}}</option>
            </select>
            <br />
            <button ng-click="ctrl.searchRequirements(Name)" class="btn btn-success custom-width" ng-disabled="!Name || Name.length == 0"><i class="fa fa-search"></i></button>
            <br />
            <br />

            <h3>Selected Elements</h3>
            <button ng-click="ctrl.setListFco()" class="btn btn-success custom-width"><i class="fa fa-file"></i></button>

        </div>

        <div id="rightSection">
            <h3> List of Functional Paradigm</h3>
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
                    <tr ng-repeat="u in ctrl.getAllUsers()">
                        <td>{{u.id}}</td>
                    	<td>{{u.name}}</td>
                    	<td> <button  ng-click="ctrl.selectUser(u.id)" class="btn btn-success custom-width"><i class="fa fa-caret-right"></i></button></td>
                    </tr>
                </tbody>
        </div>

    </body>
</html>