<html>

<head>
    <title> Common Criteria | AFamily Structure</title>
    <link rel="shortcut icon" href="Images/favicon1.ico">
    <link href="css/bootstrap.css" rel="stylesheet" />
</head>

<body>

    <span class="uppercase" style="color:#ff0000; text-transform:uppercase;"> <strong>  {{ ctrl.getIdAFamily() }} </strong></span>

    <h3> Objectives </h3>
    <table>
        <thead>
            <tr>
                <th width="100"></th>
                <th width="100"></th>
            </tr>
        </thead>
        <tbody>
            <tr ng-repeat="f in ctrl.getAfObjectives()">
                <td>{{f.testo}}</td>
            </tr>
        </tbody>
    </table>

    <h3> Component Levelling </h3>
    <table>
            <thead>
                <tr>
                    <th width="100"></th>
                    <th width="100"></th>
                </tr>
            </thead>
            <tbody>
                <tr ng-repeat="f in ctrl.getAfLevellingCriteria()">
                    <td>{{f.testo}}</td>
                </tr>
            </tbody>
        </table>


<h3>  Application Notes </h3>
    <table>
            <thead>
                <tr>
                    <th width="100"></th>
                    <th width="100"></th>
                </tr>
            </thead>
            <tbody>
                <tr ng-repeat="f in ctrl.getAfApplicationNotes()">
                    <td>{{f.testo}}</td>
                </tr>
            </tbody>
        </table>






    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th width="100"></th>
                <th width="100"></th>
            </tr>
        </thead>
        <tbody>
            <tr ng-repeat="f in ctrl.getAComponent()">
                <td>{{f.id}}</td>
                <td>{{f.name}}</td>

                <td>
                    <button type="button" ng-click="ctrl.showDipendenze(f.id)" class="btn btn-success custom-width">Browse</button>
                </td>
            </tr>
        </tbody>
    </table>

</body>

</html>