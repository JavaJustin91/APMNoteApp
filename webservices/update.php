<?php
include_once('config.php');
$title = $_GET['title'];
$content = $_GET['content'];
$today = date('Y-m-d');
$id = $_GET['id'];

if (!empty($id)) {
    $sql = "UPDATE notes SET title=$title, content=$content, date_created=$today WHERE id=$id";
    $query = $conn->query($sql);
    if ($query) {
        $result = array("status" => 1, "" => "Note Updated!");
    } else {
        $result = array("status" => 0, "" => "Failed to update note!");
    }
}
@mysqli_close($conn);
header('Content-type: application/json');
echo json_encode($result);