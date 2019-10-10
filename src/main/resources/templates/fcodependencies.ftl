<div class="generic-container"
    <div class="panel panel-default">
       <!-- Default panel contents -->
        <div class="panel-heading"><span class="lead">DEPENDENCE</span></div>
		<div class="panel-body">
			<div class="table-responsive">
		        <table class="table table-hover">
		            <thead>
		            <tr>
		                <th>ID</th>
		                <th>IDF</th>
		                <th width="100"></th>
		                <th width="100"></th>
		            </tr>
		            </thead>
		            <tbody>
		            <tr ng-repeat="f in ctrl.getListFcodipendencies()">
		                <td>{{f.fcomponent}}</td>
		                <td>{{f.idf}}</td>
		            </tr>
		            </tbody>
		        </table>
			</div>
		</div>
	</div>
</div>