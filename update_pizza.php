<?php
include 'config.php';
$data = json_decode(file_get_contents("php://input"));

if(!empty($data->id) && !empty($data->pname)) {
    $sql = "UPDATE pizzas SET pname = ?, categoryname = ?, vegetarian = ? WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->execute([$data->pname, $data->categoryname, $data->vegetarian, $data->id]);
    echo json_encode(["message" => "Pizza updated!"]);
} else {
    echo json_encode(["message" => "Missing data!"]);
}
?>