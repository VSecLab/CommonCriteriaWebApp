<html>

<head>
    <title> Common Criteria | Selected Assurance Requirements</title>
    <link rel="shortcut icon" href="Images/favicon1.ico">
    <link href="css/editSAR.css" rel="stylesheet" />
</head>

<body>
    <div class="modifyDIV">

        <h3></h3>
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
                <tr ng-repeat="a in ctrl.getListAssuranceRequirements()">
                    <td>{{a.id}}</td>
                    <td>{{a.name}}</td>
                    <td>
                        <button type="button" ng-disabled="!a.id" ng-click="ctrl.removeElementListAssuranceRequirements(a.id)" class="btn btn-danger custom-width"><i class="fa fa-trash"></i></button>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
</body>

</html>