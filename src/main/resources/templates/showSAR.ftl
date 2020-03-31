<html>

<head>
    <title> Common Criteria | Security Assurance Requirements</title>
    <link rel="shortcut icon" href="Images/favicon1.ico">
    <link href="css/editSAR.css" rel="stylesheet" />
</head>

<body>
    <div class="modifyDIV">
        <div id="leftSection">

            <h3> Introduction of Common Criteria Part 3 </h3>
            <br>
            <p>
                Security assurance components, as defined in this CC Part 3, are the basis
                for the security assurance requirements expressed in a Protection Profile (PP)
                or a Security Target (ST).
                <br>
                These requirements establish a standard way of expressing the assurance
                requirements for TOEs. This CC Part 3 catalogues the set of assurance components,
                families and classes.
                <br>
                This CC Part 3 also defines evaluation criteria for PPs and STs
                and presents evaluation assurance levels that define the predefined CC scale for
                rating assurance for TOEs, which is called the Evaluation Assurance Levels (EALs).
            </p>
            <br>
            <h3> Scope </h3>
            <br>
            <p>
                This CC Part 3 defines the assurance requirements of the CC.
                <br>
                It includes the evaluation assurance levels (EALs) that define a
                scale for measuring assurance for component TOEs, the composed
                assurance packages (CAPs) that define a scale for measuring assurance
                for composed TOEs, the individual assurance components from which the
                assurance levels and packages are composed, and the criteria for evaluation
                of PPs and STs.
            </p>
        </div>
        <div id="rightSection">

            <h3>List of selected Assurance Requirements</h3>
            <br>
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
                        <td>
                            <button ng-click="ctrl.showAClassStructure(a.id)" class="btn btn-success custom-width"><i class="fa fa-caret-right"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <br>
            <button type="button" ng-click="ctrl.downloadpdf()" class="btn btn-success custom-width">Download</button>

        </div>
    </div>
</body>

</html>