<html>
    <head>
        <title> Common Criteria | Selected Elements</title>
        <link rel="shortcut icon" href="Images/favicon1.ico">
        <link href="css/bootstrap.css" rel="stylesheet"/>
        <link href="css/editSAR.css" rel="stylesheet"/>
    </head>
    <body>



<div id="exportthis">

<p><strong>6 SECURITY REQUIREMENTS</strong><br />Section 6 provides security functional and assurance requirements that must be satisfied by a compliant TOE. These requirements consist of functional components from Part 2 of the CC, extended requirements, and an Evaluation Assurance Level (EAL) that contains assurance components from Part 3 of the CC.</p>
<p><br /><strong>6.1 CONVENTIONS</strong><br />The CC permits four types of operations to be performed on functional requirements: selection, assignment, refinement, and iteration. These operations, when performed on requirements that derive from CC Part 2 are identified in this ST in the following manner:&nbsp;Selection: Indicated by surrounding brackets, e.g., [selected item].</p>
<ul>
<li>&nbsp;Assignment: Indicated by surrounding brackets and italics, e.g., [assigned item].</li>
<li>&nbsp;Refinement: Refined components are identified by using bold for additional information, or strikeout for deleted text.</li>
<li>&nbsp;Iteration: Indicated by assigning a number in parenthesis to the end of the functional component identifier as well as by modifying the functional component title to distinguish between iterations, e.g., &lsquo;FDP_ACC.1(1), Subset access control (administrators)&rsquo; and &lsquo;FDP_ACC.1(2) Subset access control (devices)&rsquo;.</li>
</ul>
<p><br /><strong>6.2 TOE SECURITY FUNCTIONAL REQUIREMENTS</strong><br />The security functional requirements for this ST consist of the following components from Part 2 of the CC and extended components defined in Section 5, summarized in Table 10 - Summary of Security Functional Requirements.</p>


  <table border="0" cellpadding="0" cellspacing="0" width="100%" class="scrollTable">
              <thead class="fixedHeader">
                  <tr>
                      <th> ID </th>
                      <th> NAME </th>
                      <th> <button type="button" ng-click="ctrl.downloadpdf()" class="btn btn-success custom-width">Download</button> </th>
                  </tr>
              </thead>
              <tbody class="scrollContent" width="100%">
                <tr ng-repeat="u in ctrl.getListFco()">
  		            <td>{{u.id}}</td>
                    <td>{{u.name}}</td>
                </tr>
              </tbody>
          </table>
     <div id="exportthis">

<style>

/* define height and width of scrollable area. Add 16px to width for scrollbar          */
div.tableContainer {
	clear: both;
	border: 1px solid #963;
	height: 285px;
	overflow: auto;
	width: 100%
}

/* Reset overflow value to hidden for all non-IE browsers. */
html>body div.tableContainer {
	overflow: hidden;
	width: 100%
}

/* define width of table. IE browsers only                 */
div.tableContainer table {
	float: left;
	/* width: 740px */
}

/* define width of table. Add 16px to width for scrollbar.           */
/* All other non-IE browsers.                                        */
html>body div.tableContainer table {
	/* width: 756px */
}

/* set table header to a fixed position. WinIE 6.x only                                       */
/* In WinIE 6.x, any element with a position property set to relative and is a child of       */
/* an element that has an overflow property set, the relative value translates into fixed.    */
/* Ex: parent element DIV with a class of tableContainer has an overflow property set to auto */

thead.fixedHeader tr {
	position: relative;
}

/* set THEAD element to have block level attributes. All other non-IE browsers            */
/* this enables overflow to work on TBODY element. All other non-IE, non-Mozilla browsers */

/* make the TH elements pretty */
thead.fixedHeader th {
	background: red;
	border: none;
	font-weight: bold;
	padding: 4px 3px;
	text-align: left;
    color: white;
}

html>body tbody.scrollContent {
	display: block;
	height: 100px;
	overflow: auto;
	width: 100%
}

html>body thead.fixedHeader {
	display: table;
	overflow: auto;
	width: 100%
}

/* make TD elements pretty. Provide alternating classes for striping the table */
/* http://www.alistapart.com/articles/zebratables/                             */
tbody.scrollContent td, tbody.scrollContent tr.normalRow td {
	background: #FFF;
	border: none;
	padding: 2px 3px 3px 4px;
}






</style>


</body>
</html>