<div class="generic-container"
    <div class="panel panel-default">

<span class="uppercase" style="color:#ff0000"> <strong>  {{ ctrl.getIdf() }} </strong></span>

       <!-- Default panel contents -->
        <div class="panel-heading"><span class="lead">DEPENDENCE</span></div>
		<div class="panel-body">
			<div class="table-responsive">
		        <table class="table table-hover">
		            <thead>
		            <tr>
		                <th>ID</th>
		                <th width="100"></th>
		                <th width="100"></th>
		            </tr>
		            </thead>
		            <tbody>
		            <tr ng-repeat="f in ctrl.getListFcodipendencies()">
		                <td>{{f.fcomponent}}</td>
		            </tr>
		            </tbody>
		        </table>
			</div>
		</div>

		     <!-- Default panel contents -->
                <div class="panel-heading"><span class="lead">HIERARCHICALS</span></div>
        		<div class="panel-body">
        			<div class="table-responsive">
        		        <table class="table table-hover">
        		            <thead>
        		            <tr>
        		                <th>ID</th>
        		                <th width="100"></th>
        		                <th width="100"></th>
        		            </tr>
        		            </thead>
        		            <tbody>
        		            <tr ng-repeat="f in ctrl.getListFcoHierarchicals()">
        		                <td>{{f.fcomponent}}</td>
        		            </tr>
        		            </tbody>
        		        </table>
        			</div>
        		</div>





       <!-- Default panel contents -->
  <div class="panel-heading"><span class="lead">EVALUATOR NOTES</span></div>
		<div class="panel-body">
			<div class="table-responsive">
		        <table class="table table-hover">

		            <tbody>
		            <tr ng-repeat="f in ctrl.getFcoEvaluatorNotes()">

                      	<td>{{f.para}}</td>

		            </tr>
		            </tbody>
		        </table>
			</div>
		</div>

       <!-- Default panel contents -->
  <div class="panel-heading"><span class="lead">MANAGEMENT</span></div>
		<div class="panel-body">
			<div class="table-responsive">
		        <table class="table table-hover">

		            <tbody>
		            <tr ng-repeat="f in ctrl.getListFcoManagement()">

                      	<td>{{f.text}}</td>

		            </tr>
		            </tbody>
		        </table>
			</div>
		</div>


		<div class="panel-heading"><span class="lead">USER NOTES</span></div>
        		<div class="panel-body">
        			<div class="table-responsive">
        		        <table class="table table-hover">

        		            <tbody>
        		            <tr ng-repeat="f in ctrl.getFcoUserNotes()">

                              	<td>{{f.para}}</td>

        		            </tr>
        		            </tbody>
        		        </table>
        			</div>
        		</div>

	    <div class="panel-heading"><span class="lead">FELEMENT</span></div>
        		<div class="panel-body">
        			<div class="table-responsive">
        		        <table class="table table-hover">
                         <thead>
        		            <tr>
        		                <th>ID</th>
        		                <th width="100"></th>
        		                <th width="100"></th>
        		            </tr>
        		            </thead>
        		            <tbody>
        		            <tr ng-repeat="f in ctrl.getFelement()">

                              	<td>{{f.id}}</td>

        		            </tr>
        		            </tbody>
        		        </table>
        			</div>
        		</div>


	</div>
</div>