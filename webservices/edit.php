<?php
require 'config.php';

$id  = $_GET["id"];
$sql = "SELECT * FROM notes WHERE id = '".$id."'";
$result = $conn->query($sql);
$data = $result->fetch_assoc();

echo json_encode($data);