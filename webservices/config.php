<?php
    define('BASE_PATH', 'http://noteapp:8888/webservices/');
    define('DB_HOST', 'localhost');
    define('DB_NAME', 'supernotes');
    define('DB_USERNAME', 'root');
    define('DB_PASSWORD', 'root');
    $conn = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);

    if(mysqli_connect_errno()){
        echo('Connection failure' .mysqli_connect_error());
        exit();
    }

