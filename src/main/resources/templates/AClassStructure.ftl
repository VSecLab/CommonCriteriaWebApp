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


    </div>
</div>


