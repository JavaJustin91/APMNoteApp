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
    $scope.note = {
        title:"",
        content:""
    };

    $scope.save = function(){
        var dataString = $("#createForm").serialize();
        if($scope.note.title === "" || $scope.note.content === ""){
            $("#msg").html("Missing required fields");
        } else {
            $.ajax({
                type:'POST',
                url: 'http://localhost/NoteApp/webservices/createNote.php',
                data:dataString,
                cache: false,
                success: function(result){
                    $("#msg").html(result);
                    $scope.note.title = $("#title").val("");
                    $scope.note.content = $("#content").val("");
                }
            });
        }
        return false;
    };

});
