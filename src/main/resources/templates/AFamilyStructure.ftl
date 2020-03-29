<html>

<head>
    <title> Common Criteria | AFamily Structure</title>
    <link rel="shortcut icon" href="Images/favicon1.ico">
    <link href="css/editSAR.css" rel="stylesheet" />
</head>

<body>

    <div class="modifyDIV">
        <div id="leftSection">
            <h1> {{ ctrl.getIdAFamily() }}</h1>
            </br>
            <h3> Objectives </h3>
            <table>
                <tbody>
                    <tr ng-repeat="f in ctrl.getAfObjectives()">
                        <td>
                            <div class="gfg" style="text-align: left" ;>
                                {{f.testo}}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            </br>
            <h3> Component Levelling </h3>
            <table>
                <tbody>
                    <tr ng-repeat="f in ctrl.getAfLevellingCriteria()">
                        <td>
                            <div class="gfg" style="text-align: left" ;>
                                {{f.testo}}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            </br>
            <h3> Application Notes </h3>
            <table>
                <tbody>
                    <tr ng-repeat="f in ctrl.getAfApplicationNotes()">
                        <td>

                            <div class="gfg" style="text-align: left" ;>
                                {{f.testo}}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>

        <div id="rightSection">

            <table>
                <thead>
                    <tr>
                        <th> ID </th>
                        <th> NAME </th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="a in ctrl.getAComponent()">
                        <td>{{a.id}}</td>
                        <td>{{a.name}}</td>
                        <td>
                            <button type="button " " ng-click="ctrl.showAComponentStructure(a.id) " class="btn btn-success custom-width ">Browse</button>
                       	</td>

                    </tr>
               </tbody>
     		</table>

		</div>
	</div>

</body>

</html>