<?php
    include_once 'config.php';
    $id = $_GET['id'];
    if(!empty($id)){
        $sql = "DELETE FROM notes WHERE id = $id";
        $query = $conn->query($sql);
        if($query){
            $result = array("status"=>1, ""=>"Note Deleted");
        } else {
            $result = array("status"=>1, ""=>"Failed to delete note!");
        }
    }
@mysqli_close($conn);
header('Content-type: application/json');
echo json_encode($result);