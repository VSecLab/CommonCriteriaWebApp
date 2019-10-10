<div class="generic-container"
                  <div class="panel panel-default">
                     <!-- Default panel contents -->
                      <div class="panel-heading"><span class="lead">INTRODUCTION</span></div>
              		<div class="panel-body">
              			<div class="table-responsive">
              		        <table class="table table-hover">
              		            <thead>
              		            <tr>
              		                <th>TYPE</th>
              		                <th>ID</th>
              		                <th>PARA</th>
                                    <th>IDF</th>
              		                <th width="100"></th>
              		                <th width="100"></th>
              		            </tr>
              		            </thead>
              		            <tbody>
              		            <tr ng-repeat="f in ctrl.getAllClass()">
              		                <td>{{f.type}}</td>
              		                <td>{{f.id}}</td>
              		                <td>{{f.para}}</td>
              		                <td>{{f.idf}}</td>
              		            </tr>
              		            </tbody>
              		        </table>
              			</div>
              		</div>
  <div class="panel-heading"><span class="lead">EVALUATOR NOTES</span></div>
		<div class="panel-body">
			<div class="table-responsive">
		        <table class="table table-hover">
		            <thead>
		            <tr>
		                <th>TYPE</th>
		                <th>ID</th>
		                <th>PARA</th>
                        <th>IDF</th>
		                <th width="100"></th>
		                <th width="100"></th>
		            </tr>
		            </thead>
		            <tbody>
		            <tr ng-repeat="f in ctrl.getListFcInformative()">
		                <td>{{f.type}}</td>
		                <td>{{f.id}}</td>
		                <td>{{f.para}}</td>
		                <td>{{f.idf}}</td>
		            </tr>
		            </tbody>
		        </table>
			</div>
		</div>
	    <div class="panel-heading" ><span class="lead">FAMILY</span></div>
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
    		            <tr ng-repeat="f in ctrl.getFfamily()">
    		                <td>{{f.id}}</td>
    		                <td>{{f.name}}</td>
    		                <td>{{f.idf}}</td>
    		                <td> <button type="button" ui-sref="ffamilystructure" ng-click="ctrl.showFfBehaviour(f.id)" class="btn btn-success custom-width">Browse</button></td>
    		            </tr>
    		            </tbody>
    		        </table>
    			</div>
    		</div>
    </div>
</div>


