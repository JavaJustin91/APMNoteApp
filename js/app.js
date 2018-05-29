var noteApp = angular.module("superNotes", ["ngRoute"]);
noteApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/notes.html',
            controller: 'notesCtrl'
        })
        .when('/create', {
            templateUrl: 'templates/create.html',
            controller: 'createCtrl'
        })
        .when('/view/:id', {
            templateUrl: 'templates/view.html',
            controller: 'viewCtrl'
        })
        .when('/delete/:id', {
            templateUrl: 'templates/delete.html',
            controller: 'deleteCtrl'
        })
        .when('/update/:id', {
            templateUrl: 'templates/update.html',
            controller: 'updateCtrl'
        })
        .otherwise({
            redirectTo: '/'
        })
});
noteApp.controller("notesCtrl", function ($scope, $http) {
    $http.get("http://localhost/NoteApp/webservices/allNotes.php")
        .then(function (response) {
            $scope.notes = response.data;
        });
});
noteApp.controller("viewCtrl", function ($scope, $http, $routeParams) {
    $http({
        url: "http://localhost/NoteApp/webservices/getNote.php",
        params:{id:$routeParams.id},
        method: "get"
    })
        .then(function(response){
            $scope.notes = response.data;
        });
});
noteApp.controller("deleteCtrl", function ($scope, $http, $routeParams) {
    $http({
        url: "http://localhost/NoteApp/webservices/delete.php",
        params:{id:$routeParams.id},
        method: "get"
    })
        .then(function(response){
            $scope.notes = response.data;
        });
});
noteApp.controller("createCtrl", function($scope) {
    $("#submit").click(function(){
        var title = $("#title").val();
        var content = $("#content").val();
        var dataString = $("#createForm").serialize();
        if(title === "" || content === ""){
            $("#msg").html("Missing required fields");
        } else {
            $.ajax({
                type:'POST',
                url: 'http://localhost/NoteApp/webservices/createNote.php',
                data:dataString,
                cache: false,
                success: function(result){
                    $("#msg").html(result);
                    var title = $("#title").val("");
                    var content = $("#content").val("");
                }
            });
        }
        return false;
    });
});
noteApp.controller("updateCtrl", function($scope) {
    $("#submit").click(function(){
        var title = $("#title").val();
        var content = $("#content").val();
        var dataString = $("#updateForm").serialize();
        if(title === "" || content === ""){
            $("#msg").html("Missing required fields");
        } else {
            $.ajax({
                type:'POST',
                url: 'http://localhost/NoteApp/webservices/update.php',
                data:dataString,
                cache: false,
                success: function(result){
                    $("#msg").html(result);
                    var title = $("#title").val("");
                    var content = $("#content").val("");
                }
            });
        }
        return false;
    });
});