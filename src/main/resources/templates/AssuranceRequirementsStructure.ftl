<html>

<head>
    <title> Common Criteria | Assurance Component</title>
    <link rel="shortcut icon" href="Images/favicon1.ico">
    <link href="css/editSAR.css" rel="stylesheet" />
</head>

<body>


    <div class="modifyDIV" style="height: 600px" ;>
        <h1> Component </h1>
        <table>
            <thead>
                <tr>
                    <th> ID </th>
                    <th> NAME </th>
                    <th> </th>
                    <th> </th>
                </tr>
            </thead>
            <tbody>
                <tr ng-repeat="a in ctrl.getAComponentInAClass()">
                    <td>{{a.id}}</td>
                    <td>{{a.name}}</td>
                    <td>
                        <button type="button" ng-click="ctrl.showAComponentStructure(f.id)" class="btn btn-success custom-width"><i class="fa fa-list-alt"></i></button>
                    </td>
                    <td>
                        <button type="button" ng-click="ctrl.addFco(f)" class="btn btn-danger custom-width"><i class="fa fa-plus"></i></button>
                    </td>

                </tr>
            </tbody>
        </table>

    </div>
</body>

</html>