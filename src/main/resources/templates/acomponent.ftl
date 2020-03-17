<html>
    <head>
        <title> Common Criteria | Assurance Component</title>
        <link rel="shortcut icon" href="Images/favicon1.ico">
        <link href="css/bootstrap.css" rel="stylesheet"/>
        <link href="css/editSAR.css" rel="stylesheet"/>
    </head>
    <body>
        <h1> COMPONENT </h1>
        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="scrollTable">
            <thead class="fixedHeader">
                <tr>
                    <th> ID </th>
                    <th> NAME </th>
                </tr>
            </thead>
            <tbody class="scrollContent" width="100%">
                <tr ng-repeat="f in ctrl.getListFcomponent()" width="100%">
                    <td>{{f.id}}</td>
                    <td>{{f.name}}</td>
                    <td> <button type="button" ng-click="ctrl.showDipendenze(f.id)" class="btn btn-success custom-width"><i class="fa fa-list-alt"></i></button></td>
                    <td> <button type="button" ng-click="ctrl.addFco(f)" class="btn btn-danger custom-width"><i class="fa fa-plus"></i></button></td>
                </tr>
            </tbody>
        </table>


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
	height: 570px;
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
































