<html>
    <head>
        <title> Common Criteria | Component</title>
        <link rel="shortcut icon" href="Images/favicon1.ico">
        <link href="css/bootstrap.css" rel="stylesheet"/>
    </head>
    <body>

        <h1 style="color: red;"> Component: {{ctrl.getIdf() }} </h1>


        <h2> DEPENDENCE </h2>
        <table>
            <thead>
                <tr>
                    <th> ID </th>
                </tr>
            </thead>
            <tbody>
		        <tr ng-repeat="f in ctrl.getListFcodipendencies()">
		            <td>{{f.fcomponent}}</td>
		        </tr>
		    </tbody>
		</table>

        <h2>HIERARCHICALS</h2>
        <table>
            <thead>
        	    <tr>
        		    <th>ID</th>
        	    </tr>
        	</thead>
            <tbody>
        	    <tr ng-repeat="f in ctrl.getListFcoHierarchicals()">
        		    <td>{{f.fcomponent}}</td>
        		</tr>
        	</tbody>
        </table>


        <h2> EVALUATOR NOTES </h2>
	    <table>
            <tbody>
		        <tr ng-repeat="f in ctrl.getFcoEvaluatorNotes()">
                    <td>{{f.para}}</td>
		        </tr>
		    </tbody>
		</table>

        <h2>MANAGEMENT</h2>
		<table>
            <tbody>
		        <tr ng-repeat="f in ctrl.getListFcoManagement()">
                    <td>{{f.text}}</td>
		        </tr>
		    </tbody>
		</table>

		<h2>USER NOTES</h2>
		<table>
            <tbody>
        	    <tr ng-repeat="f in ctrl.getFcoUserNotes()">
                    <td>{{f.para}}</td>
        		</tr>
        	</tbody>
        </table>


        <h2>FELEMENT</h2>
		<table>
            <thead>
        	    <tr>
        		    <th>ID</th>
        		</tr>
        	</thead>
        	<tbody>
        	    <tr ng-repeat="f in ctrl.getFelement()">
                    <td>{{f.id}}</td>
        		</tr>
        	</tbody>
        </table>






</body>
</html>