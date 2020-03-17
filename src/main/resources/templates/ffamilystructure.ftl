<html>
    <head>
        <title> Common Criteria | Family Structure</title>
        <link rel="shortcut icon" href="Images/favicon1.ico">
        <link href="css/bootstrap.css" rel="stylesheet"/>
    </head>
    <body>

<span class="uppercase" style="color:#ff0000"> <strong>  {{ ctrl.getIdfamily() }} </strong></span>



              		        <table>
                            <thead>
        		            <tr>
        		                <th width="100"></th>
        		                <th width="100"></th>
        		            </tr>
        		            </thead>
              		            <tbody>
              		            <tr ng-repeat="f in ctrl.getListFfBehaivour() track by $index">

              		                <td>{{f.para}}</td>

              		            </tr>
              		            </tbody>
              		        </table>




              		        <table>

              		            <tbody>
              		            <tr ng-repeat="f in ctrl.getListFfUserNotes()">

              		                <td>{{f.para}}</td>

              		            </tr>
              		            </tbody>
              		        </table>

       <h2> COMPONENT (REQUIREMENTS) </h2>

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
                 		            <tr ng-repeat="f in ctrl.getListFcomponent()">
                 		                <td>{{f.id}}</td>
                 		                <td>{{f.name}}</td>

                 		                 <td> <button type="button" ng-click="ctrl.showDipendenze(f.id)" class="btn btn-success custom-width">Browse</button></td>
                 		            </tr>
                 		            </tbody>
                 		        </table>

</body>
</html>