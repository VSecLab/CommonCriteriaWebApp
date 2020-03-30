<html>

<head>
    <title> Common Criteria | AComponent Structure</title>
    <link rel="shortcut icon" href="Images/favicon1.ico">
    <link href="css/editSAR.css" rel="stylesheet" />
</head>

<body>

    <div class="modifyDIV">
        <div id="leftSection">
            <h1> {{ ctrl.getIdAComponent() }}</h1>
            </br>
            <h3> Dependency </h3>
            <table>
                <tbody>
                    <tr ng-repeat="f in ctrl.getAcoDependsOnComponent()">
                        <td>
                            <div class="gfg" style="text-align: left" ;>
                                {{f.acomponent}}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            </br>
            <h3> Objectives </h3>
            <table>
                <tbody>
                    <tr ng-repeat="f in ctrl.getAcoObjectives()">
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
                    <tr ng-repeat="f in ctrl.getAcoApplicationNotes()">
                        <td>
                            <div class="gfg" style="text-align: left" ;>
                                {{f.testo}}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            </br>

        </div>

        <div id="rightSection">

            <h3> Developer Action Elements </h3>
            <table>
                <thead>
                    <tr>
                        <th> ID </th>
                        <th> TEXT </th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="a in ctrl.getAeDeveloper()">
                        <td>{{a.id}}</td>
                        <td>{{a.testo}}</td>
                    </tr>
                </tbody>
            </table>
            </br>
            <h3> Content and presentation elements </h3>
            <table>
                <thead>
                    <tr>
                        <th> ID </th>
                        <th> TEXT </th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="a in ctrl.getAeContent()">
                        <td>{{a.id}}</td>
                        <td>{{a.testo}}</td>
                    </tr>
                </tbody>
            </table>
            </br>
            <h3> Evaluator action elements </h3>
            <table>
                <thead>
                    <tr>
                        <th> ID </th>
                        <th> TEXT </th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="a in ctrl.getAeEvaluator()">
                        <td>{{a.id}}</td>
                        <td>{{a.testo}}</td>

                    </tr>
                </tbody>
            </table>

        </div>
    </div>

</body>

</html>