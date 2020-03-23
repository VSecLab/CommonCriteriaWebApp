<html>
    <head>
        <title> Common Criteria | Structure</title>
        <link rel="shortcut icon" href="Images/favicon1.ico">
        <link href="css/bootstrap.css" rel="stylesheet"/>
    </head>
    <body>


    <span class="uppercase" style="color:#ff0000"> <strong>  {{ ctrl.getIdaclass() }} </strong></span>

    <h2> INTRODUCTION </h2>

    <table>
        <tbody>
            <tr ng-repeat="f in ctrl.getAcIntroduction()">
                <td>{{f.testo}}</td>
            </tr>
        </tbody>
    </table>



    <h2> FAMILY</h2>
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
            <tr ng-repeat="f in ctrl.getAFamily()">
                <td>{{f.id_afamily}}</td>
                <td>{{f.name}}</td>
                <td> <button type="button" ui-sref="AFamilyStructure" ng-click="ctrl.showAFamilyStructure(f.id_afamily)" class="btn btn-success custom-width">Browse</button></td>
            </tr>
        </tbody>
    </table>


</body>
</html>


