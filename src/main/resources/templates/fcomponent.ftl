<div class="generic-container"
    <div class="panel panel-default">


       <!-- Default panel contents -->
        <div class="panel-heading"><span class="lead">LIST OF FCLASS</span></div>
		<div class="panel-body">
			<div class="table-responsive">
		        <table class="table table-hover">
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

                 	 <td> <button type="button" ng-click="ctrl.showDipendenze(f.id)" class="btn btn-success custom-width">Description</button></td>
                     <td> <button type="button" ng-click="ctrl.addFco(f)" class="btn btn-danger custom-width">Add</button></td>
                 	</tr>
		            </tbody>
		        </table>
			</div>

		</div>

    </div>
</div>

































