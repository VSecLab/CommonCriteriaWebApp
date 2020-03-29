<html>

<head>
    <title> Common Criteria | Structure</title>
    <link rel="shortcut icon" href="Images/favicon1.ico">
    <link href="css/bootstrap.css" rel="stylesheet" />
</head>

<body>

    <h1 class="uppercase" style="color:#ff0000"> <strong style="margin-left: 5px;">  {{ ctrl.getIdaclass() }} </strong></h1>

    <h2> INTRODUCTION </h2>

    <table>
        <tbody>
            <tr ng-repeat="f in ctrl.getAcIntroduction()">
                <td>
                    <center>
                        <div class="gfg">
                            {{f.testo}}
                        </div>
                </td>
            </tr>
        </tbody>
    </table>

    <h2> FAMILY</h2>
    <table class="fixed_header">
        <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th width="100"></th>
                <th width="100"></th>
            </tr>
        </thead>

        <tbody ">
            <tr ng-repeat="f in ctrl.getAFamily() ">

                <td>{{f.id_afamily}}</td>
                <td>{{f.name}}</td>
                <td> <button type="button " ui-sref="AFamilyStructure " ng-click="ctrl.showAFamilyStructure(f.id_afamily) " class="btn btn-success custom-width ">Browse</button></td>

            </tr>
        </tbody>

    </table>


<style> div.gfg {
     margin:5px;
     padding:5px;
     width: auto;
     height: 300px;
     overflow: auto;
     text-align:justify;
}
 .fixed_header{
     margin:5px;
     padding:5px;
     width: 400px;
     table-layout: fixed;
     border-collapse: collapse;
}
 .fixed_header tbody{
     margin:5px;
     padding:5px;
     display:block;
     width: 100%;
     overflow: auto;
     height: 100px;
}
 .fixed_header thead tr {
     margin:5px;
     padding:5px;
     display: block;
}
 .fixed_header thead {
     background: red;
     color:#fff;
}
 .fixed_header th, .fixed_header td {
     margin:5px;
     padding:5px;
     padding: 5px;
     text-align: left;
     width: 200px;
}
 </style>

</body>
</html>