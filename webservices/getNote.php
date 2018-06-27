<?php
    include_once 'config.php';

    $id = $_GET['id'];
    $sql = "SELECT * FROM notes WHERE id = ?;";
    $stmt = mysqli_stmt_init($conn);

    if(!mysqli_stmt_prepare($stmt, $sql)){
        $json = array('status' => 0, 'msg' => 'Not Found!');
    } else {
        mysqli_stmt_bind_param($stmt, "i", $id);
        mysqli_stmt_execute($stmt);
        $mySqlResult = mysqli_stmt_get_result($stmt);

            while ($row = mysqli_fetch_assoc($mySqlResult)) {
                $id = $row['id'];
                $title = $row['title'];
                $content = $row['content'];
                $date_created = $row['date_created'];
                $result = array('id' => $id, 'title' => $title, 'content' => $content, 'date_created' => $date_created);
            }
            $json = $result;
    }

@mysqli_close($conn);
header('Content-type: application/json');
echo json_encode($json);

