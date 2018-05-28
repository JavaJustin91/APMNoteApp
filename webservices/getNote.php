<?php
    include_once 'config.php';
    $id = $_GET['id'];
    if(!empty($id)) {
        $sql = "SELECT * FROM notes WHERE id = $id";
        $query = $conn->query($sql);
        if ($query->num_rows > 0) {
            while ($row = $query->fetch_array()) {
                $id = $row['id'];
                $title = $row['title'];
                $content = $row['content'];
                $date_created = $row['date_created'];
                $result = array('id' => $id, 'title' => $title, 'content' => $content, 'date_created' => $date_created);
            }
            $json = $result;
        } else {
            $json = array('status' => 0, 'msg' => 'Not Found!');
        }
    }
        @mysqli_close($conn);
        header('Content-type: application/json');
        echo json_encode($json);

