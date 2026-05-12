<?php
include 'config.php';
$data = json_decode(file_get_contents("php://input"));

if(!empty($data->id)) {
    $sql = "DELETE FROM pizzas WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->execute([$data->id]);
    echo json_encode(["message" => "Pizza deleted!"]);
} else {
    echo json_encode(["message" => "Missing id!"]);
}
?>