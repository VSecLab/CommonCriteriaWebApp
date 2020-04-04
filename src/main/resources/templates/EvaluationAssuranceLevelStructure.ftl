<html>

<head>
    <title> Common Criteria | Evaluation Assurance Level</title>
    <link rel="shortcut icon" href="Images/favicon1.ico">
    <link href="css/editSAR.css" rel="stylesheet" />
</head>

<body>


    <div class="modifyDIV">
        <div id="leftSection">
      <h1>  {{ ctrl.getIdEAL() }} </h1>
            <h3> Objectives </h3>
            <table>
                            <tbody>
                                <tr ng-repeat="f in ctrl.getEalObjectives()">
                                    <td style="text-align: revert" ;>
                                        <div class="gfg">
                                            {{f.testo}}
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br>
                        <br>
            <h3> Assurance Components </h3>
            <table>
                                        <tbody>
                                            <tr ng-repeat="f in ctrl.getEalAssuranceComponents()">
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
            <h3> Components for EAL </h3>
            <br>
                <table>
                    <thead>
                        <tr>
                            <th> Assurance Components </th>
                            <th> Show </th>
                            <th> </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr ng-repeat="a in ctrl.getEalComponent()">
                            <td>{{a.acomponent}}</td>
                             <td>
                                <button type="button" ng-click="ctrl.showAComponentStructure(a.acomponent)" class="btn btn-success custom-width"><i class="fa fa-list-alt"></i></button>
                             </td>

                        </tr>
                    </tbody>
                </table>
        </div>

    </div>


</body>
</html>