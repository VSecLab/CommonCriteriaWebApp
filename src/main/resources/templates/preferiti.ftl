
<div class="generic-container"
    <div class="panel panel-default">
       <!-- Default panel contents -->
        <div class="panel-heading" ><span class="lead">SELECTED ELEMENTS</span></div>
		<div class="panel-body">
			<div class="table-responsive">
            <div id="exportthis">
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
		            <tr ng-repeat="u in ctrl.getListFclass()" >

		                <td>{{u.id}}</td>
		                <td>{{u.name}}</td>
		            </div>
		              <td><button type="button" ng-disabled="!u.id" ng-click="ctrl.removeFclass(u.id)" class="btn btn-danger custom-width">Remove</button></td>
		            </tr>
		            </tbody>
		        </table>
			</div>
		</div>
	<button type="button" ng-click="ctrl.downloadpdf()" class="btn btn-success custom-width">Download</button>
    </div>
</div>