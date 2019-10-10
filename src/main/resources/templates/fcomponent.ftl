<div class="generic-container"
    <div class="panel panel-default">
       <!-- Default panel contents -->
        <div class="panel-heading"><span class="lead">REQUIREMENTS</span></div>
		<div class="panel-body">
			<div class="table-responsive">
		        <table class="table table-hover">
		            <thead>
		            <tr>
		                <th>ID</th>
		                <th>NAME</th>
		                <th>IDF</th>
		                <th width="100"></th>
		                <th width="100"></th>
		            </tr>
		            </thead>
		            <tbody>
		            <tr ng-repeat="f in ctrl.getListFcomponent()">
		                <td>{{f.id}}</td>
		                <td>{{f.name}}</td>
		                <td>{{f.idf}}</td>
		                <td> <button type="button" ng-click="ctrl.showDipendenze(f.id)" class="btn btn-success custom-width">Dependece</button></td>
                        <td> <button type="button" ng-click="ctrl.showFcoDescription(f.id)" class="btn btn-danger custom-width">Description</button></td>
		            </tr>
		            </tbody>
		        </table>
			</div>
		</div>
	</div>
</div>