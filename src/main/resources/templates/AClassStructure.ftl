<html>

<head>
    <title> Common Criteria | Structure</title>
    <link rel="shortcut icon" href="Images/favicon1.ico">
    <link href="css/editSAR.css" rel="stylesheet" />
</head>

<body>

    <div class="modifyDIV">
                <h1> {{ ctrl.getIdaclass() }}</h1>
        <div id="leftSection">


            <h3> Introduction </h3>

            <table>
                <tbody>
                    <tr ng-repeat="f in ctrl.getAcIntroduction()">
                        <td style="text-align: revert" ;>
                            <div class="gfg">
                                {{f.testo}}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div id="rightSection">
            <h3> Family</h3>

            <table>
                <thead>
                    <tr>
                        <th> ID </th>
                        <th> NAME </th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="a in ctrl.getAFamily()">
                        <td>{{a.id_afamily}}</td>
                        <td>{{a.name}}</td>
                        <td>
                            <button type="button " ui-sref="AFamilyStructure " ng-click="ctrl.showAFamilyStructure(a.id_afamily) " class="btn btn-success custom-width "><i class="fa fa-caret-right"></i></button>
                        </td>

                    </tr>
                </tbody>
            </table>

        </div>
    </div>

</body>

</html>