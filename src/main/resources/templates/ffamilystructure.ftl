<div class="generic-container"
                  <div class="panel panel-default">

<span class="uppercase" style="color:#ff0000"> <strong>  {{ ctrl.getIdfamily() }} </strong></span>

                     <!-- Default panel contents -->
                    <div class="panel-heading"><span class="lead">BEHAVIOUR</span></div>
              		<div class="panel-body">
              			<div class="table-responsive">
              		        <table class="table table-hover">

              		            <tbody>
              		            <tr ng-repeat="f in ctrl.getListFfBehaivour()">

              		                <td>{{f.para}}</td>

              		            </tr>
              		            </tbody>
              		        </table>
              			</div>
              		</div>

       <!-- Default panel contents -->
                    <div class="panel-heading"><span class="lead">USER NOTES</span></div>
              		<div class="panel-body">
              			<div class="table-responsive">
              		        <table class="table table-hover">

              		            <tbody>
              		            <tr ng-repeat="f in ctrl.getListFfUserNotes()">

              		                <td>{{f.para}}</td>

              		            </tr>
              		            </tbody>
              		        </table>
              			</div>
              		</div>
        <div class="panel-heading" ><span class="lead">COMPONENT (REQUIREMENTS)</span></div>
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

                 		                 <td> <button type="button" ng-click="ctrl.showDipendenze(f.id)" class="btn btn-success custom-width">Browse</button></td>
                 		            </tr>
                 		            </tbody>
                 		        </table>
                 			</div>
                 		</div>



             </div>

</div>