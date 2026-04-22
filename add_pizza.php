<?php
include 'config.php';
$data = json_decode(file_get_contents("php://input"));

if(!empty($data->pname)) {
    $sql = "INSERT INTO pizzas (pname, categoryname, vegetarian) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->execute([$data->pname, $data->categoryname, $data->vegetarian]);
    echo json_encode(["message" => "Pizza added!"]);
}
?>