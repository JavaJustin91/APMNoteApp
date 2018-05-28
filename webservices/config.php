<?php
    define('BASE_PATH', 'http://localhost/NoteApp/webservices');
    define('DB_HOST', 'localhost');
    define('DB_NAME', 'supernotes');
    define('DB_USERNAME', 'app-user');
    define('DB_PASSWORD', 'passw0rd');
    $conn = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);

    if(mysqli_connect_errno()){
        echo('Connection failure' .mysqli_connect_error());
        exit();
    }

