<!DOCTYPE html>

<html lang="en" ng-app="crudApp">
    <head>
        <title>${title}</title>
        <!-- CSS (load bootstrap) -->
        <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" />
        <link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.0.0/css/font-awesome.css" />
        <link href="css/home.css" rel="stylesheet"/>
        <!-- jQuery -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <!-- JS (load angular, ui-router) -->
        <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.2.25/angular.min.js"></script>
        <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.25/angular-route.js"></script>
        <script src="js/lib/localforage.min.js" ></script>
        <!-- PDF create and download -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.22/pdfmake.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js"></script>
        <script src="js/lib/ngStorage.min.js"></script>
        <script src="js/app/MainApp.js"></script>
        <!-- FClass Controller and Service -->
        <script src="js/app/Service/UserService.js"></script>
        <script src="js/app/Controller/UserController.js"></script>
        <!-- AClass Controller and Service -->
        <script src="js/app/Service/AClassService.js"></script>
        <script src="js/app/Controller/AClassController.js"></script>

        <!-- Importing social icon -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>

    <body ng-app="crudApp">

            <header ui-view="header">
                <a class="active"> Common Criteria Web Application </a>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#prova">Contact Us</a>
            </header>

            <nav ui-view="nav">
                <b href="#">Security Target</b>
                <a href="#">ST introduction</a>
                <a href="#">Conformance claims</a>
                <a href="#">Security Problem Definition</a>
                <a href="#">Security Objectives</a>
                <a href="#">Extended Components Definition</a>
                <button class="dropdown-btn">Security requirements
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-container" style="padding:0px;">
                    <div class="dropdown2-btn">
                        <a href="#" class="dropdown3-btn">Security functional requirements</a>
                        <div class="dropdown-container">
                            <div class="dropdown">
                                <div class="dropdown-content">
                                    <a href="#editSFR">Edit</a>
                                    <a href="#show">Show</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="dropdown2-btn">
                        <a href="#" class="dropdown3-btn">Security assurance requirements</a>
                        <div class="dropdown-container">
                            <div class="dropdown">
                                <div class="dropdown-content">
                                    <a href="#editSAR">Edit</a>
                                    <a href="#showSAR">Show</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#">Security requirements rationale</a>
                </div>
                <a href="#">TOE summary specification</a>
            </nav>
            <div id="section">
                <!-- where content will be injected -->
                <div ng-view style="position: relative;">
                </div>
            </div>

            <footer ui-view="footer">
                 <div class="container">
                    <div class="row">
                      <div class="col-md-8 col-sm-6 col-xs-12">
                        <p class="copyright-text">
                            Copyright &copy; 2020 All Rights Reserved by Lorenzo Diana & Roberto Chello.
                        </p>
                      </div>
                      <div class="col-md-4 col-sm-6 col-xs-12">
                        <ul class="social-icons">
                          <li><a href="#facebook" class="fa fa-facebook"></a></li>
                          <li><a href="#linkedin" class="fa fa-linkedin"></a></li>
                          <li><a href="#instagram" class="fa fa-instagram"></a></li>
                          <li><a href="#github" class="fa fa-github"></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
            </footer>

    </body>

    <script>

        var dropdown = document.getElementsByClassName("dropdown-btn");
        var i;
        for (i = 0; i < dropdown.length; i++) {
            dropdown[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var dropdownContent = this.nextElementSibling;
                if (dropdownContent.style.display === "block") {
                    dropdownContent.style.display = "none";
                } else {
                    dropdownContent.style.display = "block";
                    }
            });
        }
        var dropdown3 = document.getElementsByClassName("dropdown3-btn");
        var i;
        for (i = 0; i < dropdown3.length; i++) {
             dropdown3[i].addEventListener("mouseenter", function() {
                 var dropdownContent = this.nextElementSibling;
                 dropdownContent.style.display = "block";
             });
            var dropdown2 = document.getElementsByClassName("dropdown2-btn");
            dropdown2[i].addEventListener("mouseleave", function() {
                var dropdownContent = this.children[1];
                dropdownContent.style.display = "none";
            });
        }





    </script>

</html>