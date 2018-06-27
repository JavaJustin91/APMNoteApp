<?php
include 'config.php';

$id = isset($_GET['id']) ? $_GET['id'] : '';
$title = $_POST['title'];
$content = $_POST['content'];
$sql = "UPDATE notes SET title = '".$title."', content = '".$content."' WHERE id = '".$id."'";
    if ($conn->query($sql) == TRUE) {
        echo "Note updated Successfully";
    } else {
        echo "Failed to update note";

    }