<?php
    include_once 'config.php';

    $id = $_GET['id'];
    $sql = "DELETE FROM notes WHERE id = ?";
    $stmt = mysqli_stmt_init($conn);

if(!mysqli_stmt_prepare($stmt, $sql)){
    echo "Failed to delete note";
} else {
    mysqli_stmt_bind_param($stmt, "i", $id);
    mysqli_stmt_execute($stmt);
    echo "Note Deleted Successfully";
}

@mysqli_close($conn);
