<div class="generic-container"
                  <div class="panel panel-default">

  <span class="uppercase" style="color:#ff0000"> <strong>  {{ ctrl.getIdfclass() }} </strong></span>


                     <!-- Default panel contents -->
                      <div class="panel-heading"><span class="lead">INTRODUCTION</span></div>
              		<div class="panel-body">
              			<div class="table-responsive">
              		        <table class="table table-hover">

              		            <tbody>
              		            <tr ng-repeat="f in ctrl.getAllClass()">

              		                <td>{{f.para}}</td>

              		            </tr>
              		            </tbody>
              		        </table>
              			</div>
              		</div>
  <div class="panel-heading"><span class="lead">EVALUATOR NOTES</span></div>
		<div class="panel-body">
			<div class="table-responsive">
		        <table class="table table-hover">

		            <tbody>
		            <tr ng-repeat="f in ctrl.getListFcInformative()">

		                <td>{{f.para}}</td>

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
    			</div>
    		</div>
    </div>
</div>


