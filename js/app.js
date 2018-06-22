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
        .when('/edit/:id', {
            templateUrl: 'templates/edit.html',
            controller: 'editCtrl'
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
            $scope.allNotes = response.data;
        });
});

noteApp.controller("viewCtrl", function ($scope, $http, $routeParams) {
    $http({
        url: "http://localhost/NoteApp/webservices/getNote.php",
        params: {id: $routeParams.id},
        method: "get"
    })
        .then(function (response) {
            $scope.viewNote = response.data;
        });
});

noteApp.controller("deleteCtrl", function ($scope, $http, $routeParams) {
    $http({
        url: "http://localhost/NoteApp/webservices/delete.php",
        params: {id: $routeParams.id},
        method: "get"
    })
        .then(function (response) {
            $scope.deleteNote = response.data;
        });
});
noteApp.controller("editCtrl", function ($scope, $http, $routeParams) {

    $http({
        url: "http://localhost/NoteApp/webservices/edit.php",
        params: {id: $routeParams.id},
        method: "get"
    })
        .then(function (response) {
            $scope.editNote = response.data;
        });


    $scope.saveEdit = function () {
        if ($scope.editNote.title === "" || $scope.editNote.content === "") {
            $("#msg").html("Missing required fields");
        } else {
            $http({
                url: "http://localhost/NoteApp/webservices/editNote.php",
                method: "POST",
                params: {id: $routeParams.id}
            })
                .then(function successCallback(response) {
                    $scope.editNote = response.data;
                }, function errorCallback(response) {
                    $scope.error = response.statusText;
                });
        }
    }

});
noteApp.controller("createCtrl", function ($scope) {
    $scope.createNote = {
        title:"",
        content:""
    };
    $scope.save = function () {
        var dataString = $("#createForm").serialize();
        if ($scope.createNote.title === "" || $scope.createNote.content === "") {
            $("#msg").html("Missing required fields");
        } else {
            $.ajax({
                type: 'POST',
                url: 'http://localhost/NoteApp/webservices/createNote.php',
                data: dataString,
                cache: false,
                success: function (result) {
                    $("#msg").html(result);
                    $scope.createNote.title = $("#title").val("");
                    $scope.createNote.content = $("#content").val("");
                }
            });
        }
        return false;
    };
});
