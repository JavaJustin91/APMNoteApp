<?php
include_once 'config.php';
$sql = "SELECT * FROM notes ORDER by id DESC";
$query = $conn->query($sql);
if($query->num_rows > 0){
    while($row = $query->fetch_array()){
        $id = $row['id'];
        $title = $row['title'];
        $content = $row['content'];
        $date_created = $row['date_created'];
        $result[] = array('id'=>$id, 'title'=>$title, 'content'=>$content, 'date_created'=>$date_created);
    }
    $json = array('status' => 1, 'info' => $result);
} else {
    $json = array('status' => 0, 'message' => 'No note found');
}
@mysqli_close($conn);
header('Content-type: application/json');
echo json_encode($json);