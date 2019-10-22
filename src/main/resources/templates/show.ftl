<div class="generic-container"
    <div class="panel panel-default">

<div id="exportthis">

<p><strong>6 SECURITY REQUIREMENTS</strong><br />Section 6 provides security functional and assurance requirements that must be satisfied by a compliant TOE. These requirements consist of functional components from Part 2 of the CC, extended requirements, and an Evaluation Assurance Level (EAL) that contains assurance components from Part 3 of the CC.</p>
<p><br /><strong>6.1 CONVENTIONS</strong><br />The CC permits four types of operations to be performed on functional requirements: selection, assignment, refinement, and iteration. These operations, when performed on requirements that derive from CC Part 2 are identified in this ST in the following manner:&nbsp;Selection: Indicated by surrounding brackets, e.g., [selected item].</p>
<ul>
<li>&nbsp;Assignment: Indicated by surrounding brackets and italics, e.g., [assigned item].</li>
<li>&nbsp;Refinement: Refined components are identified by using bold for additional information, or strikeout for deleted text.</li>
<li>&nbsp;Iteration: Indicated by assigning a number in parenthesis to the end of the functional component identifier as well as by modifying the functional component title to distinguish between iterations, e.g., &lsquo;FDP_ACC.1(1), Subset access control (administrators)&rsquo; and &lsquo;FDP_ACC.1(2) Subset access control (devices)&rsquo;.</li>
</ul>
<p><br /><strong>6.2 TOE SECURITY FUNCTIONAL REQUIREMENTS</strong><br />The security functional requirements for this ST consist of the following components from Part 2 of the CC and extended components defined in Section 5, summarized in Table 10 - Summary of Security Functional Requirements.</p>


  <table class="table">
              <thead>
                       <tr>
              		   <th>CLASS</th>
              		   <th>ID</th>
              		   <th>NAME</th>

              		    <th width="100"></th>
              		   <th width="100"></th>
                       </tr>
              		   </thead>
              		   <tbody>
                       <tr ng-repeat="u in ctrl.getListFco()">
                       <td></td>
                       <td>{{u.id}}</td>
                       <td>{{u.name}}</td>

              		  </tr>
              </tbody>
       </table>
</div>



<br/>
<button type="button" ng-click="ctrl.downloadpdf()" class="btn btn-success custom-width">Download</button>
</div>
</div>