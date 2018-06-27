<?php
    include_once('config.php');

$title = $_POST['title'] ;
$content =  $_POST['content'];
$today = date('Y-m-d');

$sql = "INSERT INTO notes(title, content, date_created) VALUES (?, ?, ?)";

$stmt = mysqli_stmt_init($conn);

if(!mysqli_stmt_prepare($stmt, $sql)){
    echo "Failed to add note";
} else {
    mysqli_stmt_bind_param($stmt, "sss", $title, $content, $today);
    mysqli_stmt_execute($stmt);
    echo "Note Added Successfully";
}

@mysqli_close($conn);
