<?php
    include_once('config.php');
    $title = $_POST['title'];
    $content = $_POST['content'];
    $today = date('Y-m-d');
    $query = "INSERT INTO notes(title, content, date_created) VALUES('$title', '$content', '$today')";

    if($conn->query($query) == TRUE){
        echo "Note Added Successfully";
    } else {
        echo "Failed to add note";
    }