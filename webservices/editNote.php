<?php
include_once 'config.php';

$data = json_decode(file_get_contents("php://input"));

if(count($data) > 0){
    $title = mysqli_real_escape_string($conn, $data->title);
    $content = mysqli_real_escape_string($conn, $data->content);
    $id = $data->id;
    $query = "UPDATE notes SET title = '$title', content = '$content' WHERE id = '$id'";

    if(mysqli_query($conn, $query)){
        echo 'Note successfully edited!';
    } else {
        echo 'Failed to edit note.';
    }

}
