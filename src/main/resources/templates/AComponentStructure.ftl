<html>

<head>
    <title> Common Criteria | AComponent Structure</title>
    <link rel="shortcut icon" href="Images/favicon1.ico">
    <link href="css/bootstrap.css" rel="stylesheet" />
</head>

<body>

    <h1 class="uppercase" style="color:#ff0000; text-transform:uppercase;"> <strong>  {{ ctrl.getIdAComponent() }} </strong></h1>


    <h2> DEPENDENCY </h2>
    <h2> OBJECTIVES </h2>

    <h2> APPLICATION NOTES </h2>

    <h2> DEVELOPER ACTION ELEMENTS </h2>
    <table>
            <thead>
                <tr>
                    <th width="100"></th>
                    <th width="100"></th>
                </tr>
            </thead>
            <tbody>
                <tr ng-repeat="f in ctrl.getAeDeveloper()">
                    <td>{{f.id}}</td>
                    <td>{{f.testo}}</td>
                </tr>
            </tbody>
        </table>

<h2> CONTENT AND PRESENTATION ELEMENTS</h2>
    <table>
                <thead>
                    <tr>
                        <th width="100"></th>
                        <th width="100"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="f in ctrl.getAeContent()">
                        <td>{{f.id}}</td>
                        <td>{{f.testo}}</td>
                    </tr>
                </tbody>
            </table>

<h2> EVALUATOR ACTION ELEMENTS</h2>
    <table class="fixed_header">


            <tbody >
                <tr ng-repeat="f in ctrl.getAeEvaluator() ">

                    <td>{{f.id}}</td>
                    <td>{{f.testo}}</td>


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