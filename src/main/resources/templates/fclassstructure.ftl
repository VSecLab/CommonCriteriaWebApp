<html>
    <head>
        <title> Common Criteria | Structure</title>
        <link rel="shortcut icon" href="Images/favicon1.ico">
        <link href="css/bootstrap.css" rel="stylesheet"/>
    </head>
    <body>

  <span class="uppercase" style="color:#ff0000"> <strong>  {{ ctrl.getIdfclass() }} </strong></span>


                      <h2> INTRODUCTION </h2>

              		        <table>

              		            <tbody>
              		            <tr ng-repeat="f in ctrl.getAllClass()">

              		                <td>{{f.para}}</td>

              		            </tr>
              		            </tbody>
              		        </table>


		        <table>

		            <tbody>
		            <tr ng-repeat="f in ctrl.getListFcInformative()">

		                <td>{{f.para}}</td>

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
    		            <tr ng-repeat="f in ctrl.getFfamily()">
    		                <td>{{f.id}}</td>
    		                <td>{{f.name}}</td>

    		                <td> <button type="button" ui-sref="ffamilystructure" ng-click="ctrl.showFfamilyStructure(f.id)" class="btn btn-success custom-width">Browse</button></td>
    		            </tr>
    		            </tbody>
    		        </table>



</body>
</html>

